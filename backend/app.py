import torch
from transformers import BertTokenizer, BertForSequenceClassification
import pickle
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import os

# === Paths ===
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# === Load label encoder ===
with open(os.path.join(BASE_DIR, "label_encoder.pkl"), "rb") as f:
    label_encoder = pickle.load(f)

# === Load tokenizer & model ===
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model = BertForSequenceClassification.from_pretrained(
    "bert-base-uncased", num_labels=len(label_encoder.classes_)
)
model.load_state_dict(torch.load(os.path.join(BASE_DIR, "bert_bias_model.pt"), map_location=device))
model.to(device)
model.eval()

# === FastAPI app ===
app = FastAPI()

# Allow frontend (React) to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # ⚠️ In production, set only your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === Input Schema ===
class TextRequest(BaseModel):
    text: str

# === Prediction Route ===
@app.post("/predict")
async def predict_bias(request: TextRequest):
    inputs = tokenizer(
        request.text,
        return_tensors="pt",
        truncation=True,
        padding=True,
        max_length=128,
    )
    inputs = {k: v.to(device) for k, v in inputs.items()}

    with torch.no_grad():
        outputs = model(**inputs)
        predictions = torch.argmax(outputs.logits, dim=1).cpu().numpy()

    label = label_encoder.inverse_transform(predictions)[0]
    return {"prediction": label}

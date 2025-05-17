from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from PIL import Image
import io
import base64
import numpy as np
from tensorflow.keras.models import load_model
import tensorflow as tf

# --- Import your scenario functions ---
from scenarios import get_scenario, get_all_scenarios

app = FastAPI()

# --- CORS Middleware ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Load ML Model ---
model = load_model("../model/model.h5")

# --- Pydantic Models ---
class AnswerRequest(BaseModel):
    panel_index: int
    option_index: int

class ImageData(BaseModel):
    image: str  # Base64 encoded image string

# --- Preprocessing Function ---
def preprocess_image(image_base64):
    header, encoded = image_base64.split(",", 1)
    image = Image.open(io.BytesIO(base64.b64decode(encoded))).convert("L")  # Grayscale
    image = image.resize((28, 28))
    image = np.array(image).reshape(1, 28, 28, 1) / 255.0
    return image

def is_blank(image_array):
    return np.all(image_array > 0.98)

# --- Routes: Scenario-based Quiz ---
@app.get("/scenarios")
async def list_scenarios():
    return get_all_scenarios()

@app.get("/scenarios/{scenario_id}")
async def get_scenario_by_id(scenario_id: int):
    scenario = get_scenario(scenario_id)
    if scenario:
        return scenario
    raise HTTPException(status_code=404, detail="Scenario not found")

@app.post("/scenarios/{scenario_id}/check-answer")
async def check_answer(scenario_id: int, request: AnswerRequest):
    scenario = get_scenario(scenario_id)
    if not scenario:
        raise HTTPException(status_code=404, detail="Scenario not found")

    if request.panel_index >= len(scenario["panels"]):
        raise HTTPException(status_code=400, detail="Invalid panel index")

    panel = scenario["panels"][request.panel_index]
    if request.option_index >= len(panel["options"]):
        raise HTTPException(status_code=400, detail="Invalid option index")

    option = panel["options"][request.option_index]

    return {
        "correct": option["correct"],
        "feedback": option["feedback"]
    }

# --- Route: ML Prediction ---
@app.post("/predict")
def predict(data: ImageData):
    try:
        img = preprocess_image(data.image)

        if is_blank(img):
            return {"response": "Please draw something before submitting!"}

        prediction = model.predict(img)
        predicted_class = np.argmax(prediction[0])

        class_names = ["apple", "cloud", "flower", "leaf"]
        label = class_names[predicted_class]

        friendly_responses = {
            "apple": "That looks like an Apple!",
            "cloud": "Wow, that Cloud is fantastic!",
            "flower": "A Beautiful Flower!",
            "leaf": "Nice! This looks like a Leaf!",
        }

        response = friendly_responses.get(label, f"That looks like a {label}!")
        return {"response": response}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

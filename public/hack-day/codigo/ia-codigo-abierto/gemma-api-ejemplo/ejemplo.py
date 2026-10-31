"""Ejemplo mínimo de Gemma 4 mediante la Gemini API."""

import os
import sys
from pathlib import Path

from dotenv import load_dotenv
from google import genai


load_dotenv(Path(__file__).with_name(".env"))
if os.getenv("GOOGLE_API_KEY"):
    raise SystemExit("Quita GOOGLE_API_KEY del entorno: tiene prioridad sobre GEMINI_API_KEY.")
if not os.getenv("GEMINI_API_KEY") or os.getenv("GEMINI_API_KEY") == "pega_aqui_tu_clave_personal":
    raise SystemExit("Crea .env a partir de .env.example y configura GEMINI_API_KEY.")

pregunta = " ".join(sys.argv[1:]) or "Da una idea breve para ayudar a una comunidad local."
cliente = genai.Client()
respuesta = cliente.models.generate_content(
    model="gemma-4-26b-a4b-it",
    contents=pregunta,
)
print(respuesta.text or "El modelo no devolvió texto.")

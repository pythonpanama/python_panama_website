"""Ejemplo mínimo de integración con un LLM open-weight local vía Ollama.

Requiere: `ollama serve` corriendo localmente y un modelo descargado
(ej. `ollama pull gemma3`). Dependencia: `pip install requests`.
"""

import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
MODELO = "gemma3"  # [Pendiente] confirmar el modelo/tamaño usado en la demo


def preguntar(prompt: str, modelo: str = MODELO) -> str:
    respuesta = requests.post(
        OLLAMA_URL,
        json={"model": modelo, "prompt": prompt, "stream": False},
        # La primera llamada carga el modelo en memoria y puede tardar.
        timeout=120,
    )
    respuesta.raise_for_status()
    return respuesta.json()["response"]


if __name__ == "__main__":
    print(preguntar("Explica en una frase qué es Hacktoberfest."))

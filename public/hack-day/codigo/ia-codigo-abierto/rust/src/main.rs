//! Ejemplo mínimo de integración con un LLM open-weight local vía Ollama.
//!
//! Requiere: `ollama serve` corriendo localmente y un modelo descargado
//! (ej. `ollama pull gemma3`). Ejecutar con `cargo run`.

use std::time::Duration;

use serde::{Deserialize, Serialize};

const OLLAMA_URL: &str = "http://localhost:11434/api/generate";
const MODELO: &str = "gemma3"; // [Pendiente] confirmar el modelo/tamaño usado en la demo
const TIMEOUT_SEGUNDOS: u64 = 120;

#[derive(Serialize)]
struct Peticion<'a> {
    model: &'a str,
    prompt: &'a str,
    stream: bool,
}

#[derive(Deserialize)]
struct Respuesta {
    response: String,
}

fn preguntar(prompt: &str) -> Result<String, reqwest::Error> {
    // La primera llamada carga el modelo en memoria y puede tardar más que el
    // límite por defecto de reqwest (30 s).
    let cliente = reqwest::blocking::Client::builder()
        .timeout(Duration::from_secs(TIMEOUT_SEGUNDOS))
        .build()?;
    let cuerpo = Peticion {
        model: MODELO,
        prompt,
        stream: false,
    };
    let respuesta: Respuesta = cliente
        .post(OLLAMA_URL)
        .json(&cuerpo)
        .send()?
        // Sin esto, un 404 («model not found») aparece como un error de decodificación.
        .error_for_status()?
        .json()?;
    Ok(respuesta.response)
}

fn main() {
    match preguntar("Explica en una frase qué es Hacktoberfest.") {
        Ok(texto) => println!("{texto}"),
        Err(err) => eprintln!("Error llamando a Ollama: {err}"),
    }
}

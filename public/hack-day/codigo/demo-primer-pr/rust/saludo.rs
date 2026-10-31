// Demo para la charla "¿Qué es Hacktoberfest?": haz tu primer PR arreglando este saludo.
// Ejecutar con: rustc saludo.rs && ./saludo

fn saludo(nombre: &str) -> String {
    // TODO(hacktoberfest): el saludo está incompleto, falta usar el parámetro `nombre`.
    String::from("Hola")
}

fn main() {
    println!("{}", saludo("Panama City"));
}

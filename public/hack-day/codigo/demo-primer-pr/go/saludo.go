// Demo para la charla "¿Qué es Hacktoberfest?": haz tu primer PR arreglando este saludo.
// Ejecutar con: go run saludo.go
package main

import "fmt"

func saludo(nombre string) string {
	// TODO(hacktoberfest): el saludo está incompleto, falta usar el parámetro `nombre`.
	return "Hola"
}

func main() {
	fmt.Println(saludo("Panama City"))
}

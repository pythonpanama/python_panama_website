# Licencias de terceros

Recursos gráficos de terceros que usa el sitio de Python Panamá, con su licencia y lo que exige cada una. Si agregas un recurso externo (íconos, banderas, fuentes, imágenes), regístralo aquí.

| Recurso | Versión | Uso en el sitio | Licencia | Obligación |
| --- | --- | --- | --- | --- |
| [flag-icons](https://github.com/lipis/flag-icons) | 7.6.0 | Banderas SVG de los países en el blog ([`src/components/blog/flags.ts`](src/components/blog/flags.ts)) | [MIT](https://github.com/lipis/flag-icons/blob/main/LICENSE) | Conservar el aviso de copyright y el texto de la licencia (abajo) |
| [Font Awesome Free](https://fontawesome.com/) | 6.7.2 | Íconos de redes y de compartir (pie de página, contacto, blog) | Íconos: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) · Fuentes: [SIL OFL 1.1](https://openfontlicense.org/) · Código: [MIT](https://opensource.org/license/mit) — ver [fontawesome.com/license/free](https://fontawesome.com/license/free) | Atribución: se cumple con el comentario de licencia que trae la hoja de estilos del paquete y con este registro |

Los logotipos de marcas (LinkedIn, X, WhatsApp y los de aliados y patrocinadores) son marcas registradas de sus dueños. Se usan solo para identificar el servicio u organización, sin alterarlos.

## Cómo agregar una bandera

1. Busca el código ISO 3166-1 alfa-2 del país (por ejemplo `ar` para Argentina).
2. En [`src/components/blog/flags.ts`](src/components/blog/flags.ts), importa `flag-icons/flags/4x3/<código>.svg` y agrégalo a `FLAGS`.
3. Úsalo en los datos con `c("<código>", "<nombre>")`.

Solo se importan los SVG que se usan, así que el sitio no carga las 250 banderas del paquete.

## Texto de la licencia de flag-icons

```text
The MIT License (MIT)

Copyright (c) 2013 Panayiotis Lipiridis

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

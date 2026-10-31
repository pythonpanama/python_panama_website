# Plantilla de descripción del PR

[Inicio](../../README.md) · [Material del día](../README.md) · [Cheatsheet de Git y GitHub](cheatsheet-git-github.md)

![área](https://img.shields.io/badge/%C3%A1rea-Material%20del%20d%C3%ADa-3776AB?style=flat-square) ![Hack Day](https://img.shields.io/badge/Hack%20Day-s%C3%A1b%2031%20oct%202026-F28C38?style=flat-square)

Para copiar y pegar en la descripción de un pull request durante el Hack Day del 31 oct 2026. Casi todos los proyectos de la lista están en inglés, así que la plantilla también. Se cambia lo que está entre corchetes. La página del día y la hoja rápida del mentor viven en el repositorio privado [hacktoberfest-main-stage](https://github.com/yosef7/hacktoberfest-main-stage).

```markdown
## What
[One sentence: what this PR changes.]

## Why
[The problem it fixes. Link the issue: Fixes #123]

## How I checked it
[What you did to confirm it works: opened the new link, ran the tests, etc.]

## AI use
[No AI was used. / I used (tool) to (what). I reviewed and tested every line.]

First contribution, made at Hacktoberfest Hack Day Panama City.
```

## Cómo llenarla

| Sección | Qué poner | Ejemplo |
| --- | --- | --- |
| **What** | Una frase con el cambio | `Fix broken link to "Desarrollo de proyectos informáticos con Java".` |
| **Why** | El problema y el issue que cierra, si hay uno. `Fixes #734` cierra el issue al fusionarse | `The old URL returns 404. The book moved to the author's new site.` |
| **How I checked it** | Lo que hiciste para comprobarlo | `Opened the new link: it downloads the same PDF.` |
| **AI use** | Siempre, aunque no hayas usado IA. freeCodeCamp lo exige ([#62666](https://github.com/freeCodeCamp/freeCodeCamp/issues/62666)) y los demás lo agradecen | `I used Claude to translate my description to English. I reviewed it.` |

## Antes de pegarla

- Si el proyecto ya tiene su propia plantilla de PR (Open WebUI, freeCodeCamp), **se usa la del proyecto** y se agregan las secciones que falten. En Open WebUI hay que marcar la casilla del CLA.
- La última línea es opcional. Algunos mantenedores revisan con más paciencia una primera contribución, pero no hace falta pedir trato especial.

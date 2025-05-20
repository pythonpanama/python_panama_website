# Python Panamá - Sitio Web Oficial

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/pythonpanama/python_panama_website)](https://github.com/pythonpanama/python_panama_website/issues)
[![GitHub stars](https://img.shields.io/github/stars/pythonpanama/python_panama_website)](https://github.com/pythonpanama/python_panama_website/stargazers)
[![Test Status](https://github.com/pythonpanama/python_panama_website/workflows/tests/badge.svg)](https://github.com/pythonpanama/python_panama_website/actions)

![Python Panamá Logo](static/img/logo_python_panama.png)

## 📄 Descripción

Sitio web oficial de la comunidad Python Panamá, desarrollado por y para la comunidad. Este proyecto tiene como objetivo proporcionar un punto central de información sobre eventos, recursos, tutoriales y noticias relacionadas con Python en Panamá.

## ✨ Características

- 🌐 Sitio web completamente responsivo
- 📅 Calendario de eventos de la comunidad
- 📚 Recursos educativos de Python
- 📰 Blog con noticias y tutoriales
- 👨‍👩‍👧‍👦 Perfiles de miembros de la comunidad
- 📊 Estadísticas de la comunidad
- 🔄 Integración con redes sociales

## 🛠️ Tecnologías

- **Backend**: Django 4.2
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **Base de datos**: PostgreSQL
- **Despliegue**: Docker, Nginx
- **Testing**: Django Test, pytest
- **CI/CD**: GitHub Actions

## 📋 Prerrequisitos

- Python 3.9+
- pip
- virtualenv (recomendado)
- Git
- PostgreSQL (opcional, se puede usar SQLite para desarrollo)

## 🚀 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/pythonpanama/python_panama_website.git
cd python_panama_website
```

2. **Crear y activar entorno virtual**

```bash
python -m venv venv
# En Windows
venv\Scripts\activate
# En macOS/Linux
source venv/bin/activate
```

3. **Instalar dependencias**

```bash
pip install -r requirements.txt
```

4. **Configurar variables de entorno**

Crea un archivo `.env` en el directorio raíz con las siguientes variables:

```
DEBUG=True
SECRET_KEY=tu_clave_secreta_aqui
DATABASE_URL=sqlite:///db.sqlite3
# Para PostgreSQL:
# DATABASE_URL=postgres://usuario:contraseña@localhost:5432/python_panama
```

5. **Ejecutar migraciones**

```bash
python manage.py migrate
```

6. **Crear superusuario**

```bash
python manage.py createsuperuser
```

7. **Ejecutar servidor de desarrollo**

```bash
python manage.py runserver
```

El sitio estará disponible en http://localhost:8000/

## 🐳 Instalación con Docker

1. **Construir la imagen**

```bash
docker-compose build
```

2. **Ejecutar los contenedores**

```bash
docker-compose up
```

## 🧪 Ejecutar tests

```bash
# Ejecutar todos los tests
pytest

# Ejecutar con cobertura
pytest --cov=.
```

## 👥 Cómo contribuir

¡Nos encantaría que contribuyeras! Por favor, lee nuestro archivo [CONTRIBUTING.md](CONTRIBUTING.md) para detalles sobre cómo puedes ayudar a mejorar el proyecto.

## 📝 Código de Conducta

Este proyecto sigue el [Código de Conducta de Python](CODE_OF_CONDUCT.md). Al participar, se espera que respetes este código.

## 🗺️ Mapa del sitio

- **/** - Página principal
- **/eventos/** - Calendario de eventos
- **/blog/** - Noticias y tutoriales
- **/recursos/** - Recursos educativos
- **/comunidad/** - Miembros y proyectos
- **/contacto/** - Formulario de contacto

## 📸 Capturas de pantalla

![Página de inicio](docs/screenshots/home.png)
![Calendario de eventos](docs/screenshots/events.png)
![Página de recursos](docs/screenshots/resources.png)

## 📜 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

## 🔗 Enlaces útiles

- [Sitio oficial de Python Panamá](https://python.pa/)
- [Twitter de Python Panamá](https://twitter.com/pythonpanama)
- [Canal de Discord](https://discord.gg/pythonpanama)
- [Grupo de Meetup](https://www.meetup.com/python-panama/)

## 👏 Agradecimientos

- A todos los contribuidores que han ayudado a construir este proyecto
- A la [Python Software Foundation](https://www.python.org/psf/) por su apoyo
- A la comunidad global de Python por su inspiración

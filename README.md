# Desafío Handlebars y WebSockets

Este proyecto es parte del desafío de integración de Handlebars y WebSockets para la gestión de productos en una aplicación web. A continuación se describe la estructura del proyecto y su funcionalidad principal.

## Estructura del Proyecto

**Rama main** deaafio resuelto usando CommonJS **require** y **module.exports**.

**Rama ECMAScriptModules** desafio resuelto usando ECMAScript Modules **imports** y **exports**.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- `public/`: Directorio donde estan los estilos de las plantillas handlebars.
- `src/`: Directorio principal del código fuente.
  - `app.js`: Archivo principal de la aplicación.
  - `utils.js`: Archivo con funciones de utilidad.
  - `managers/`: Directorio que contiene los gestores de datos.
  - `db/`: Directorio que almacena los archivos JSON de datos.
  - `views/`: Directorio que contiene las plantillas Handlebars.
    - `layout/`: Directorio que contiene el diseño principal de las vistas.
      - `main.handlebars`: Layout principal que incluye el encabezado y el pie de página.
    - `home.handlebars`: Vista principal que muestra la lista de productos.
    - `realtimeproducts.handlebars`: Vista para la gestión en tiempo real de productos.

## Funcionalidades Principales

El proyecto proporciona las siguientes funcionalidades:

1. **Renderización de Vistas**: Utiliza el motor de plantillas Handlebars para renderizar las vistas HTML del lado del servidor.

2. **Gestión de Productos**: Permite visualizar una lista de productos en la vista principal y agregar nuevos productos en tiempo real utilizando WebSockets.

3. **Persistencia de Datos**: Los datos de productos se almacenan en archivos JSON en el directorio `db/` y se gestionan mediante la clase `ProductManager`.

4. **Estilos Personalizados**: Se pueden aplicar estilos personalizados a las vistas mediante archivos CSS, como `home.css`, que se vinculan en las plantillas HTML.

## Ejecución del Proyecto

1. Clona el repositorio desde GitHub.

2. Instala las dependencias del proyecto ejecutando `npm install`.

3. Inicia la aplicación con el comando `npm run start`.

4. Accede a la aplicación en tu navegador web utilizando la dirección `http://localhost:3000`.

## Dependencias Principales

El proyecto utiliza las siguientes dependencias principales:

- `express`: Framework web para Node.js.
- `socket.io`: Biblioteca para WebSockets en tiempo real.
- `express-handlebars`: Motor de plantillas para renderizar vistas HTML con Handlebars.

## Autor

[Mariano Alvez]

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

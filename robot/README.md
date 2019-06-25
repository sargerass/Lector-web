# Webpack Pug SCSS Skeleton

Skeleton basado en webpack 4 para construir aplicaciones web.

## Características:
* [Pug](https://pugjs.org) como motor de plantillas
* [SCSS](http://sass-lang.com) preprocesador para CSS ([autoprefixer](https://github.com/postcss/autoprefixer) incluido)
* JS linting con [Eslint](https://eslint.org), extiende [eslint-config-standard](https://github.com/standard/eslint-config-standard), incluye los siguientes plugins:
  * [import](https://github.com/benmosher/eslint-plugin-import)
  * [node](https://github.com/mysticatea/eslint-plugin-node)
  * [promise](https://github.com/xjamundx/eslint-plugin-promise)
  * [compat](https://github.com/amilajack/eslint-plugin-compat)
* CSS linting con [Stylelint](http://stylelint.io)

## Uso:
* Clona el repo via `git clone git@bitbucket.org:wunderman-phantasia/skeleton-frontend.git`
* `cd skeleton-frontend`
* `git checkout webpack4`
* Ejecuta `npm install` para descargar todas las dependencias
* Ejecuta `npm run start` para iniciar el [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (`localhost:8080` se abrirá automáticamente)
* Empieza a desarrollar
* Cuándo completes tu desarrollo, ejecuta `npm run build` para obtener la versión de producción de tu app
* Si quieres analizar tu bundle de producción, ejecuta `npm run analyze` para iniciar el [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
* Si quieres hacer debugging para encontrar por qué algo no está funcionando cuándo generamos nuestro bundle, usar  `npm run debug` y abrir el devtools con [esta extensión de chrome](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj?hl=en), asegurate de insertar `debugger;` en las líneas en donde quieres que el interprete se detenga y así puedas inspeccionar tu contexto para encontrar la solución.

## Multiples páginas:

Este skeleton te permite hacer aplicaciones de múltiples páginas, las 2 cosas que tienes que hacer son:

1. crear los archivos (\*.pug)
2. crear sus respectivos puntos de entrada (\*.js)

Ambos archivos deben tener el mismo nombre para que se correspondan, la estructura que se debe respetar es la siguiente:

```
app/
|-index.pug
|-about.pug
|-scripts/
|   |-index.js
|   |-about.js
|
...
```

Crear los archivos (\*.pug) en el nivel inmediato inferior a nuestra carpeta de desarrollo (en este caso es `app`), y los puntos de entrada (archivos js) de cada (\*.pug) dentro de la carpeta `scripts` (también a un nivel inmediato inferior).


2. Para que funcione el Live Reload, necesitas incluir el siguiente snippet en cada archivo `<page_name>.js` (para cada página):

```javascript
  if (process.env.NODE_ENV !== 'production') {
    require('./path/to/page.pug');
  }
```

# MERN (Mysql, Express, React, Nodejs)

## Aplicación de tareas integrada con backend y frontend

> server: Carpeta backend
> cliente: Carpeta frontend

> Se le añadio ("type": "module") a 'package.json' para poder hacer uso del import de modulos

> No olvidar ejecutar 'npm i' en la raiz 'mern' y en la capeta 'client'

## Proyecto creado con Vite
`npm create vite`
Crear un proyecto con vite

`npm i` 
Instalar los modulos de node, carpeta 'node_modules'

`npm run dev` 
Correr la aplicación

`npm run build` 
Cuando el proyecto este terminado, para crear el código de producción (crea carpeta 'dist')

## Dependecias backend

> Se ejecutan dentro de la carpeta del proyecto en general 'Mern'

`npm init -y` 
Inicializa node_modules por medio de node js, listar las depencias principales

`npm install express`
Express es un marco de aplicación web de Node js que proporciona amplias funciones para crear aplicaciones web y móviles. Se utiliza para crear una aplicación web híbrida, de varias páginas y de una sola página. Es una capa construida sobre Node js que ayuda a administrar servidores y rutas

`npm install nodemon`
Permite ejecutar el servidor de nuestra aplicación sin necesidar de estar ejecutando manualmente, simplemente esta pendiente de cuando hay cambios y nodemon se encarga de re-ejecutar la app

`npm install mysql2`
Módulo de conexion de mysql, tambien soporta promesas

`npm install morgan`
Poder ver por consola las peticiones que realiza el cliente al servidor

## Dependecias frontend

> Se ejecutan dentro de la carpeta 'client'

`npm install react-router-dom`
Permite el uso de rutas en la aplicación, redireccionar, links sin cargar la pagina ... 

## Axios
Se instala en la carpeta 'client'

`npm install axios`
Modulo o dependencia que nos permite conectarnos de backend a frontend
Poder comunicarse o enviar peticiones http de forma sencilla

## Cors
Se instala en la carpeta general 'mern'

`npm i cors`
Nos permite comunicar entre dos aplicaciones de backend, en este caso la solicitud que se envia a el puerto 3000, que es donde esta el servidor (con express) con las consultas sql, si no se hace esto no se pueden realizar estas operaciones dentro del index.js de administracion de rutas

## MySQL
Para el uso de la base de datos se utilizo XAMPP (mysql), se creo la base de datos 'tareas' y una tabla 'tareas'

## Ejecución
> Ya que el codigo del frontend ya se paso a producción para ejecturalo en la carpeta raiz 'mern' utilizamos el comando `npm start`, comando puesto en el archivo 'package.json' en los 'scripts'. O en su defecto ejecutar `node server/index.js`
# App de autenticación con Firebase

## Uso de Firebase Authentication, con correo electronico y por medio de Google, 'react-router-dom' para BrowserRouter para el manejo de las diferentes rutas, Navigate(componente) y useNavigate(función que se puede llamar en cualquier momento) para redireccionar. Ademas el uso de 'createContext' y 'iseContext' que practicamente permite definir una variable global y en donde los componentes hijo pueden utilizarla. Y por ultimo la simulacion de una ruta privada al momento de querer entrar a una direccion url, todo esto por medio de validaciones del usuario.

> Obs: Para poder iniciar sesion con google es importante irse en Firebase a Authentication->Settings->Dominios Autorizados y añadir la direccion ip de la aplicación. Una suposición es que se esta creando con 'vite' por lo tanto no toma el dominio localhost sino toma con el puerto.

## Proyecto creado con Vite
`npm create vite` 
Crear un proyecto con vite

`npm i` 
Instalar los modulos de node, carpeta 'node_modules'

`npm run dev` 
Correr la aplicación

`npm run build` 
Cuando el proyecto este terminado, para cre

## Firebase
`npm i firebase`
Instalacion para modulos de Firebase

## React Router
`npm i react-router-dom`
Instalacion de router para utilizar Routes, Route, Link, Navigate, useNavigate ...
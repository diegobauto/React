# App uso de Router y NavLink Actualizado (react-router-dom v6)

## App implementando el uso de 'BrowserRouter', 'Routes', 'Route' para definir cada una de las rutas que quiero en mi aplicación, incluso '*' que permite ir a una direección no especificada. El uso de 'NavLink' y 'Link' que la primera permite aplicar estilos a la direccion a la cual estoy parado, en cambio Link solo permite ir de una direccion a otra sin mas, todo esto sin refrescar el navegardor. El uso de Params, que es par obtener los parametros que llegan por la dirección url, el uso de 'Navigate' y 'useNavigate' que permite redireccionar de una pagina a otra, 'Navigate' es un componente dentro de las rutas, mientras que 'useNavigate' es simplemente tipo funcion que puedo llamar en cualquier momento. Y por ultimo el uso de 'sub rutas', que como su nombre lo indica, puedo estar en una ruta dentro de otra, y mostrar diferentes componentes.

> Dentro de las rutas ya no es necesario colocar la palabra 'exact', esto solo se hace en versiones anteriores

## Proyecto creado con Vite
`npm create vite` Crear un proyecto con vite
`npm i` Instalar los modulos de node, carpeta 'node_modules'
`npm run dev` Correr la aplicación
`npm run build` Cuando el proyecto este terminado, para crear el código de producción (crea carpeta 'dist')

## React router
`npm i react-router-dom` Importar react-router-dom
# Mis Tareas

## Descripción
Aplicación sencilla de gestión de tareas personales.

Observaciones:
- Se hace uso de patrón de arquitectura MVC en el servidor (server/), en donde los controladores (controllers) no conocen el modelo (models) al cual van a seguir. Por lo que se podria implementar cualquier otro modelo de datos (json, mongodb) y funcionaria de la misma manera.


# Instrucciones de instalación
1. Clonar el repositorio de GitHub proporcionado:
    Abrir una terminal en su máquina y navegar al directorio donde desea clonar el repositorio. Luego, ejecutar el siguiente comando para clonar el repositorio de GitHub (Es necesario el uso de git):
    > ```git clone https://github.com/diegobauto/nombre-del-repositorio.git```

    Luego ingresar a la carpeta que se creó al clonar el repositorio.
    > ```cd nombre-del-repositorio/capeta-de-la-app/```

2. Instalar dependencias del Servidor (Express.js):
    Navegar al directorio del servidor (donde generalmente se encuentra un archivo package.json) utilizando el siguiente comando:
    > ```cd server/```

    Luego, instalar las dependencias del servidor con npm:
    > ```npm install```

3. Configurar la base de datos local:
    Asegurarse de que se tiene una base de datos local configurada y ejecutándose (Base de datos con MySQL). 
    Asegurarse de que la configuración de la base de datos en el servidor coincida con la configuración local.

    - La configuración local se encuentra en el directorio: 
        > ```server/database/db.js```

    - Las consultas SQL para la generación de la base de datos se encuentran en el directorio:
        > ```server/database/db.sql```

4. Ejecutar el servidor (Express):
    Una vez que las dependencias del servidor están instaladas y la base de datos está configurada, puedes ejecutar el servidor con el siguiente comando:
    > ```npm run dev```

    El servidor Express debería estar ahora en funcionamiento y escuchando en un puerto determinado.

5. Instalar dependencias del cliente (React):
    Abrir una nueva terminal, ingresar nuevamente a la carpeta clonada (Paso 1) y navegar al directorio del cliente (donde generalmente se encuentra un archivo package.json) utilizando el siguiente comando:
    > ```cd client/```

    Luego, instalar las dependencias del cliente con npm:
    > ```npm install```

6. Iniciar la aplicación de React:
    Una vez que las dependencias del cliente estén instaladas, iniciar la aplicación de React con el siguiente comando:
    > ```npm run dev```
    
    Esto iniciará la aplicación React en un servidor de desarrollo.

7. Ahora debería estar ejecutandose la aplicación Express.js y React, funcionando en su maquina. Asegurarse de que los puertos y rutas en la configuración coincidan con lo que se espera en el proyecto (principalmente en la gestión de la base de datos). 
Para acceder a la aplicación a través del navegador es necesario visitar la dirección proporcionada por el servidor de desarrollo de React (generalmente http://localhost:5173).


## Stack Tecnológico
- Servidor: Express
- Cliente: React
- Base de datos: MySQL
- XAMPP


## Estructura empleada
- Directorio server/ (API):
    - controllers/: Funciones controladoras para manejar las solicitudes HTTP.
    - database/: Archivos relacionados con la configuración y la interacción con la base de datos.
    - libs/: Funciones generales para la gestión de la aplicación que se pueden utilizar varias veces.
    - middlewares/: Funciones intermedias que se ejecutan antes o después de las rutas principales de la aplicación.
    - models/: Modelos de datos de nuestra base de datos.
    - routes/: Archivo con la definición de las diferentes rutas de la api.
- Directorio client/src:
    - api/: Majeno de solicitudes con axios hacia la api.
    - components/: Contiene los componentes usados en la aplicación.
    - context/: Contexto general de la aplicación para el uso de los tutoriales, uso del CRUD.
    - pages/: Páginas o pantallas individuales de la aplicación.
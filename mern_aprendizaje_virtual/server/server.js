import express from "express";
import cors from 'cors'
import tutorialesRoutes from "./routes/tutoriales.routes.js";

//Inicialización
const app = express();

//Configuración
app.set("puerto", "3000");
app.use(express.json()); //Permite el manejo de json en las peticiones
app.use(cors()) //Comunicacion para que funcionen las peticiones al servidor
//app.use(cors({origin:"http://127.0.0.1:5173"})); // Especificar que servidor(es) se puede conectar

//Rutas
app.use("/api", tutorialesRoutes);

//Escucha
app.listen(app.get("puerto"));
console.log(`Servidor ejecutandose / Puerto ${app.get("puerto")}`);

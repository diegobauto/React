import express from "express";
import cors from 'cors'
import tutorialesRoutes from "./routes/tutoriales.routes.js";

//Inicialización
const app = express();

//Congiguración
app.set("puerto", "3000");
app.use(express.json()); //Uso de json
app.use(cors()) //Comunicacion para que funcionen las peticiones al servidor

//Uso de rutas
app.use("/api", tutorialesRoutes);

//Escucha
app.listen(app.get("puerto"));
console.log(`Servidor ejecutandose / Puerto ${app.get("puerto")}`);

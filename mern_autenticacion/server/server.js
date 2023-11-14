import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import { FRONTEND_URL } from "./config.js";

//Inicialización
const app = express();

//Configuración
app.use(express.json());

//Es necesario para que la cookie se pueda ver directamente desde el navegador
//En Inspeccionar -> Aplicación -> Cookies (lado izquierdo)
app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL
  })
);
app.use(cookieParser()); //Nos permite usar cookies en el servidor (req.cookies)

//Rutas
app.use("/api", authRoutes);

//Escucha
app.listen("3000");
console.log("Servidor ejecutandose / Puerto 3000");

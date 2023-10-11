import express from "express";
import cors from 'cors'
import UsersRoutes from "./routes/users.routes.js";

const app = express();

app.use(cors())
app.use(express.json())

app.use(UsersRoutes);

app.listen("3000");
console.log("Servidor Iniciado / Puerto 3000");

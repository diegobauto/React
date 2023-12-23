import express from "express";
import authRoutes from "./routes/auth.routes.js";
import unidadesRoutes from './routes/unidades.routes.js'
import recursosRoutes from './routes/recursos.routes.js'

const app = express();
app.use(express.json());

app.use("/api/usuarios/", authRoutes);
app.use("/api/unidades/", unidadesRoutes);
app.use("/api/recursos/", recursosRoutes);

app.listen("3000");
console.log("Servidor ejecuntandose / Puerto 3000");

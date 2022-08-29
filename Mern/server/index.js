import express from "express";
import cors from "cors";
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import indexRoutes from "./routes/index.routes.js";
import tareasRoutes from "./routes/tareas.routes.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

//Comunicacion para que funcionen las peticiones al servidor
//Cualquier servidor se puede conectar
app.use(cors());

/* 
Especificar que servidor se puede conectar
app.use(cors({
  origin:"http://127.0.0.1:5173"
}));
*/

//Poder utilizar json en los envios de datos, ej: el 'post' para obtener el body como json
app.use(express.json());

app.use(indexRoutes);
app.use(tareasRoutes);

app.use(express.static(join(__dirname, '../client/dist')))

app.listen("3000", () => {
  console.log("Servidor corriendo");
});

import express from "express";
import cors from "cors";
import UsersRoutes from "./routes/users.routes.js";
import TokensRoutes from "./routes/tokens.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user/", UsersRoutes);
app.use("/api/tokens/", TokensRoutes);

app.listen("3000");
console.log("Servidor Iniciado / Puerto 3000");

export default app;
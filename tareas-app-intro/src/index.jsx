import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TareaContextoProvider } from "./context/TareasContexto"; //Importar el contexto Provider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TareaContextoProvider>
      <App />
    </TareaContextoProvider>
  </React.StrictMode>
);

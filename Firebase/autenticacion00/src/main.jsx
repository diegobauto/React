import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Componente para poder utilizar router en la aplicación */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

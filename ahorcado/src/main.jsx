import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextoProvider } from "./context/Contexto.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextoProvider>
      <App />
    </ContextoProvider>
  </React.StrictMode>
);

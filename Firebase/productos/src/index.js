import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./components/firebase"; //Importar firebase
import "bootstrap/dist/css/bootstrap.min.css"; //Importar Booptstrap

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import axios from "axios";

//Configuración de axios para que funcione directamente con el servidor
const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export default instance;

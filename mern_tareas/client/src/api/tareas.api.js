import axios from "axios";

//Funciones para hacer uso del servidor por medio de express
//Realiza las peticiones por medio de axios
const API_URL = "http://localhost:3000/api";

export const obtenerTareasAPI = async () =>
  await axios.get(`${API_URL}`);

export const obtenerTareaAPI = async (id) =>
  await axios.get(`${API_URL}/${id}`);

export const crearTareaAPI = async (tarea) =>
  await axios.post(`${API_URL}`, tarea);

export const actualizarTareaAPI = async (id, nuevosValores) =>
  await axios.put(`${API_URL}/${id}`, nuevosValores);

export const eliminarTareaAPI = async (id) =>
  await axios.delete(`${API_URL}/${id}`);

export const alternarTareaRealizadaAPI = async (id, hecho) =>
  await axios.put(`${API_URL}/${id}`, { hecho });
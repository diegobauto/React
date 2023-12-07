import axios from "axios";

//Funciones para hacer uso del servidor (express)
//Realizar las peticiones por medio de axios
const API_URL = "http://localhost:3000/api";

export const obtenerTutorialesAPI = async () =>
  await axios.get(`${API_URL}`);

export const obtenerTutorialAPI = async (id_tutorial) =>
  await axios.get(`${API_URL}/${id_tutorial}`);

export const crearTutorialAPI = async (tutorial) =>
  await axios.post(`${API_URL}`, tutorial);

export const actualizarTutorialAPI = async (id_tutorial, nuevosValores) =>
  await axios.put(`${API_URL}/${id_tutorial}`, nuevosValores);

export const eliminarTutorialAPI = async (id_tutorial) =>
  await axios.delete(`${API_URL}/${id_tutorial}`);

export const alternarEstadoTutorialAPI = async (id_tutorial, estado_publicacion) =>
  await axios.put(`${API_URL}/${id_tutorial}`, { estado_publicacion });

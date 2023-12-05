import axios from "axios";

//Funciones para hacer uso del servidor (express)
//Realizar las peticiones por medio de axios

const API_URL = "http://localhost:3000/api";

export const crearTutorialSolicitud = async (tutorial) =>
  await axios.post(`${API_URL}`, tutorial);

export const obtenerTutorialesSolicitud = async () =>
  await axios.get(`${API_URL}`);

export const obtenerTutorialSolicitud = async (id_tutorial) =>
  await axios.get(`${API_URL}/${id_tutorial}`);

export const actualizarTutorialSolicitud = async (id_tutorial, nuevosValores) =>
  await axios.put(`${API_URL}/${id_tutorial}`, nuevosValores);

export const eliminarTutorialSolicitud = async (id_tutorial) =>
  await axios.delete(`${API_URL}/${id_tutorial}`);

export const alternarTutorialEstado = async (id_tutorial, estado_publicacion) =>
  await axios.put(`${API_URL}/${id_tutorial}`, { estado_publicacion });

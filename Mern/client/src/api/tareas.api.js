import axios from "axios";

//Funciones para hacer uso del servidor por medio de express
//Realiza las peticiones por medio de axios

export const obtenerTareasSolicitud = async () =>
  await axios.get("http://localhost:3000/tareas");

export const obtenerTareaSolicitud = async (id) =>
  await axios.get(`http://localhost:3000/tareas/${id}`);

export const crearTareaSolicitud = async (tarea) =>
  await axios.post("http://localhost:3000/tareas", tarea);

export const actualizarTareaSolicitud = async (id, nuevosValores) =>
  await axios.put(`http://localhost:3000/tareas/${id}`, nuevosValores);

export const eliminarTareaSolicitud = async (id) =>
  await axios.delete(`http://localhost:3000/tareas/${id}`);

export const alternarTareaRealizada = async (id, hecho) =>
  await axios.put(`http://localhost:3000/tareas/${id}`, {hecho});
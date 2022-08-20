// Hooks
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";

//Se le asigna un valor a la variable para ponerla en el estado de 'usuario'
const estadoInicial = {
  id: null,
  name: "",
  username: "Samantha",
  email: "Nathan@yesenia.net",
  address: {
    street: "Douglas Extension",
    suite: "Suite 847",
    city: "McKenziehaven",
    zipcode: "59590-4157",
    geo: {
      lat: "-68.6102",
      lng: "-47.0653",
    },
  },
  phone: "1-463-123-4447",
  website: "ramiro.info",
  company: {
    name: "Romaguera-Jacobson",
    catchPhrase: "Face to face bifurcated interface",
    bs: "e-enable strategic applications",
  },
};

export const Usuario = () => {
  const { id } = useParams(); //Obtiene el valor del parametro que llega por url

  //Estado para el usuario
  const [usuario, setUsuario] = useState(estadoInicial); 

  //Cuando el id cambia se ejecuta nuevamente 'obtenerDatosUsuario'
  useEffect(() => {
    obtenerDatosUsuario(id);
  }, [id]);

  //Obtiene información de una API
  const obtenerDatosUsuario = async (idUser) => {
    const pathUrl = `https://jsonplaceholder.typicode.com/users/${idUser}`;
    const respuesta = await fetch(pathUrl);
    const user = await respuesta.json();
    setUsuario(user);
  };

  /*Nos dice todo acerca de dónde se encuentra actualmente el usuario, 
  como el nombre de la ruta en la que se encuentra, así como cualquier 
  parámetro de consulta que pueda agregarse a nuestra URL*/
  const history = useHistory();
  const handleClick = () => {
    history.push("/lista-usuarios");  //Permite ir a una nueva direccion url
  };

  return (
    <div>
      {/* Simplemente se imprime los valores del usuario */}
      <h3>Usuario ID: {id}</h3>
      <p>Nombre: {usuario.name}</p>
      <p>Email: {usuario.email}</p>
      <p>Username: {usuario.username}</p>
      <p>Direccion: {usuario.address.street}</p>
      {/* pre permite visualizar el JSON asi en varias lineas */}
      <pre>{JSON.stringify(usuario, null, 2)}</pre>
      <button onClick={handleClick}>Regresar</button>
    </div>
  );
};

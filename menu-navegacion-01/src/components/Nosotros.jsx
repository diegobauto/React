import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Componente pagina de Nosotros
export const Nosotros = () => {
  const respuesta = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Martha" },
    { id: 3, nombre: "Diana" },
    { id: 4, nombre: "Pedro" },
  ];

  //Estado para los usuarios, inicializandolo con una lista vacia
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    document.title = "Use Effect"; //Poner el titulo al html
    setUsuarios(respuesta); //Se le asgina la lista 'respuesta' de usuarios
  }, []);

  return (
    <div>
      <h2>Nosotros</h2>
      <ul>
        {/* Recorrer los usuarios y mostrarlos en una lisat desordenada */}
        {usuarios.map((usuario) => {
          return (
            //Se le asigna una key, siempre se hace cuando se itera
            //Debido a que se repite el componente
            //Para que react reconozca a cada uno por algun identificador
            <li key={usuario.id}>
              {/* Al hacer click 'Link to' escucha y se pasa como parametro la id del usuario*/}
              <Link to={`/nosotros/${usuario.id}`}>
                Nombre: {usuario.nombre}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

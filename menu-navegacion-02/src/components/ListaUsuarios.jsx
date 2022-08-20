import { NavLink } from "react-router-dom";

const usuarios = [
  { id: 1, nombre: "Usuario 1" },
  { id: 2, nombre: "Usuario 2" },
  { id: 3, nombre: "Usuario 3" },
  { id: 4, nombre: "Usuario 4" },
];

export const ListaUsuarios = () => {
  return (
    <div>
      <h1>Lista Usuarios</h1>
      {/* Recorre la lista de usuarios y por cada uno crea una nueva url con la 'id' */}
      <ul>
        {usuarios.map((usuario) => (
          //El key se pone siempre que se itera
          //Ya que se repite el componte
          //React necesita diferenciarlos con un identificador
          <li key={usuario.id}>
            {/* Crea una nueva ruta para el usuario por su id */}
            <NavLink
              activeClassName="active"
              to={`/lista-usuarios/${usuario.id}`}
            >
              {usuario.nombre}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { Link } from "react-router-dom";

//Componente de Usuario pasando un parametro - Uso de Link
function Usuarios() {
  const idUser = 2;

  return (
    //Con 'Link' no puedo saber si esta activa (si se esta en esa direccion url)
    //Link se utiliza para simplemente ir a una dirrección, que no sea en la navegación

    <div>
      <h1>Usuarios</h1>
      {/* Se le envia como parametro un numero a la direccion de usuarios */}
      <Link to={"/usuarios/1"}>Usuario 1</Link> <br />
      {/* Tambien se puede especificar de esta forma: */}
      <Link to={`/usuarios/${idUser}`}>Usuario 2</Link>
    </div>
  );
}

export default Usuarios;

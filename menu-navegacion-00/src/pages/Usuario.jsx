import { useNavigate, useParams } from "react-router-dom";

//Componente de un Usuario accediendo a los parametro y redireccionando
function Usuario() {
  //'useParams' permite obtener los parametros que llegan por url
  //Aca ya se que llega solamente una id, por lo tante lo pongo entre llaves y obtengo el id del onjeto
  const {id} = useParams(); 
  console.log(id)

  //'useNavigate' permite redireccionar a una pagina
  // En las versiones anteriores se utilizaba ´history'
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/usuarios")
  };

  return (
    <div>
      <h1>Usuario {id}</h1>
      <button onClick={handleClick}>Ir a Usuarios</button>
    </div>
  );
}

export default Usuario;

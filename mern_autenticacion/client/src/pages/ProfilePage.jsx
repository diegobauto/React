import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthProvider";
import "../App.css";

//Componente de la pagina de perfil del usuario
function ProfilePage() {
  const { user } = useAuth(); //Uso del contexto

  return (
    <>
      <Navbar />
      <div className="container-profile">
        <div className="card-profile">
          <img
            src={`https://robohash.org/${user.id_user}`}
            alt="Imagen del usuario"
          />
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;

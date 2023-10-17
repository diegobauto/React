import { signoutRequest } from "../api/usuarios.api";
import { useContextUser } from "../context/UserContext";

function Dashboard() {
  const { getUser } = useContextUser();

  const { getRefreshToken, signout } = useContextUser();

  const handleSignOut = () => {
    const token = getRefreshToken();
    signoutRequest(token);
    signout();
  };

  return (
    <div>
      <h1>Dashboard de {getUser().nombre}</h1>
      <button onClick={handleSignOut}>Cerrar Sesión</button>
    </div>
  );
}

export default Dashboard;

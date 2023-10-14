import { useContextUser } from "../context/UserContext";

function Dashboard() {
  const { getUser } = useContextUser();
  return <h1>Dashboard de {getUser().nombre}</h1>;
}

export default Dashboard;

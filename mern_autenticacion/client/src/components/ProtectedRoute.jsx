import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Loader from "../components/Loader";

//Componete para gestionar las rutas protegidas
function ProtectedRoute() {
  //Uso del contexto
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <Loader />; //Si esta cargando una ruta que esta protegida

  /*Item 1: Si no hay nadie autenticado y tampoco esta cargando
  Entonces se redirige a la ruta inicial (donde esta el formulario) */
  /*Como isAuthenticated y loading son del contexto entonces cualquier cambio se va a
  reflejado en toda la aplicación y vuelve al Item 1. */
  if (!isAuthenticated && !loading) return <Navigate to="/" replace />;

  //De lo contrario se redirige hacie la ruta que esta protegida
  return <Outlet />;
}

export default ProtectedRoute;

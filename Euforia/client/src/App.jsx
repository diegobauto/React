import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import PrivateRouteAdmin from '../components/PrivateRouteAdmin'
import Sign from "../pages/Sign";
import NotFound from "../pages/NotFound";
import Reservas from "../pages/Reservas";
import Usuarios from '../pages/Usuarios';
import Prestamos from '../pages/Prestamos'

function App() {
  return (
    //Manejo de rutas
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route element={<PrivateRoute />}>
          <Route path="/reservas" element={<Reservas />} />
        </Route>
        <Route element={<PrivateRouteAdmin />}>
          <Route path="/usuarios" element={<Usuarios />} />
        </Route>
        <Route element={<PrivateRouteAdmin />}>
          <Route path="/prestamos" element={<Prestamos />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

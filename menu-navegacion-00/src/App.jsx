import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Usuarios from './pages/Usuarios'
import Usuario from './pages/Usuario'
import PagePadre from './pages/PagePadre'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App() {
  return (
    // Router nos permite definir las rutas que queremos para nuestra aplicacion
    <Router>
      <Navbar/> {/* Me permite verlo en las demás rutas debido a que esta dentro de Router */}
      <Routes>
        {/* Se define la ruta con el path y el componente al que se va a dirigir */}
        <Route path="/" element={<Inicio/>}/>
        <Route path="nosotros" element={<Nosotros/>}/>
        <Route path="usuarios" element={<Usuarios/>}/>
        
        {/* Parametro de 'id' que recibe el componente de 'Usuario*/}
        <Route path="usuarios/:id" element={<Usuario/>}/> 

        {/* Este Route permite redireccionar a otra dirección url
        Entonces cuando ponga 'users' en la url se va a '/usuarios' */}
        <Route path="/users" element={<Navigate to="/usuarios"/>}/>
        
        {/* Subcomponente */}
        <Route path="/pagePadre" element={<PagePadre/>}>
          <Route path="pageHijo1" element={<h1>Subcomponente pagina hijo 1</h1>}/>
          <Route path="pageHijo2" element={<h1>Subcomponente pagina hijo 2</h1>}/>
        </Route>

        {/* Este Route simula cuando no se accede a una ruta especifica anteriormente */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App

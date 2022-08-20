import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar.jsx";
import { Personaje } from "./components/Personaje.jsx";
import { Personajes } from "./components/Personajes.jsx";

function App() {
  return (
    // Se especifican los componentes de acuerdo al path
    <Router>
      <NavBar />
      <div className="container mt-3">
        <Switch>
          {/* Ejecuta el componente 'Personajes' cuando se va a la url '/' */}
          <Route exact path="/" component={Personajes} />
          {/* Ejecuta el componente 'Personaje' cuando se va a la url '/personajes/:id' 
          Pasando un parametro 'id' */}
          <Route exact path="/personajes/:id" component={Personaje} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

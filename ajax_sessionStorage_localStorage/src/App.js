import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { NavBar } from "./components/NavBar.jsx";
import { Personaje } from "./components/Personaje.jsx";
import { Personajes } from "./components/Personajes.jsx";


function App() {
  return (

    <Router>
      <NavBar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Personajes} />
          <Route exact path="/personajes/:id" component={Personaje} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

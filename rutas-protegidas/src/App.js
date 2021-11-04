import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Admin } from "./Admin.js";
import { Navbar } from "./components/Navbar.js";
import { Home } from "./Home.js";
import { Login } from './components/Login';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./config/firebase.js";
import { Loading } from "./components/Loading.js";

function App() {

    // Once
    const [firebaseUser, setFirebaseUser] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (dataUser) => {

            if (dataUser) {
                console.log('El usuario logueado');
                const usuario = {
                    id: dataUser.uid,
                    email: dataUser.email
                }
                console.log(usuario);
                setFirebaseUser(usuario)
            } else {
                console.log('El usuario ya no esta logueado');
                setFirebaseUser(null)
            }

        })
    }, [setFirebaseUser])


    return firebaseUser !== false ? (
        // Segundo
        <Router>
            {/* Primero */}
            <Navbar usuario={firebaseUser} />
            <div className="container mt-3">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" component={Admin} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    )
        :
        <Loading />
        ;
}

export default App;

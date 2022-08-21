import { onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Admin } from "./components/Admin.jsx";
import { Home } from "./components/Home.jsx";
import { Login } from "./components/Login.js";
import { Navbar } from './components/Navbar';
import { auth } from "./config/firebase.js";
import { Loading } from './components/Loading';


function App() {


    const [firebaseUser, setFirebaseUser] = useState(false)

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {

            if (user) {
                const usuario = {
                    id: user.uid,
                    email: user.email
                }
                console.log(usuario);
                setFirebaseUser(usuario)
                console.log('El usuario logueado');
            } else {
                console.log('El usuario ya no esta logueado');
                setFirebaseUser(null)
            }

        })


    }, [setFirebaseUser])


    return firebaseUser !== false ? (
        <Router>
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
        : <Loading />
}

export default App;

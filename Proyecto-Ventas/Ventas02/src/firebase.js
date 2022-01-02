// COnfiguracion e inicializacion de la base de datos
import {initializeApp} from 'firebase/app'
// Referencia a la base de datos
import {getFirestore} from 'firebase/firestore'
// Metodos de interaccion con la base de datos
import {
    collection,
    getDocs, query,
    deleteDoc,
    doc,
    updateDoc,
    addDoc,
    getDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBrDx5qWOwedj_nImHIk1KmgVKGVzFE6bY",
    authDomain: "novanity-8d109.firebaseapp.com",
    projectId: "novanity-8d109",
    storageBucket: "novanity-8d109.appspot.com",
    messagingSenderId: "471661776706",
    appId: "1:471661776706:web:5d71161f75623bc01782db",
    measurementId: "G-3YM58MV7PH"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// export const db = app.firestore();
const database = getFirestore();

export const consultarDatabase = async (nombreColeccion) => {
    try {
        const respuesta = await getDocs(query(collection(database, nombreColeccion)))
        const coleccionDatos = respuesta.docs.map((documento) => {
            // console.log(documento.data());
            const documentoTemporal = {
                id: documento.id,
                ...documento.data()
            }
            console.log(documentoTemporal);
            return documentoTemporal
        })

        return coleccionDatos
    } catch (e) {
        throw new Error(e)
    }
}

// Eliminacion de un documento
export const eliminarDocumentoDatabase = async (nombreColeccion, id) => {
    try {
        const respuesta = await deleteDoc(doc(database, nombreColeccion, id))
        console.log(respuesta);
    } catch (e) {
        throw new Error(e)
    }
}

// Actualizacion de un documento
export const actualizarDocumentoDatabase = async (nombreColeccion, id, data) => {
    try {
        const respuesta = await updateDoc(doc(database, nombreColeccion, id), data)
        console.log(respuesta);
    } catch (e) {
        throw new Error(e)
    }
}

// Guardar base de datos
export const guardarDatabase = async (nombreColeccion, data) => {

    try {
        const respuesta = await addDoc(collection(database, nombreColeccion), data)
        console.log(respuesta);
        return respuesta
    } catch (e) {
        throw new Error(e)
    }

}

export const consultarDocumentoDatabase = async (nombreColeccion, id) => {
    try {
        const respuesta = await getDoc(doc(database, nombreColeccion, id))
        // console.log(respuesta);

        const documentoTemporal = {
            id: respuesta.id,
            ...respuesta.data()
        }

        console.log(documentoTemporal);
        return documentoTemporal
    } catch (e) {
        throw new Error(e)
    }
}
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, getDoc, query, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBd8k4Psv5MFSNkZ8oMNE6dA5ELqjKSicw",
  authDomain: "lista-tareas-7bb92.firebaseapp.com",
  projectId: "lista-tareas-7bb92",
  storageBucket: "lista-tareas-7bb92.appspot.com",
  messagingSenderId: "924456057363",
  appId: "1:924456057363:web:f2a36a194d59c50eb91de6",
  measurementId: "G-B9NS10QZL3"
};

initializeApp(firebaseConfig);
export const database = getFirestore();
export const auth = getAuth();
export let usuario;

// Guardar
export const guardarDatabase = async (nombreDatabase, data) => {
  try {
    const response = await addDoc(collection(database, nombreDatabase), data);
    return response;
  } catch (error) {
    throw new Error(error.message)
  }
}

// Consultar todos los documentos (Coleccion)
export const consultarDatabase = async (nombreDatabase) => {
  try {
    const response = await getDocs(query(collection(database, nombreDatabase)));
    const elementos = response.docs.map((doc) => {
      console.log(doc);
      console.log(`Elemento ID: ${doc.id}`);
      console.dir(`Elemento:`, doc.data());
      const document = {
        id: doc.id,
        ...doc.data()
      }
      return document;
    })
    console.log(response.docs);
    console.log(elementos);
    return elementos
  } catch (error) {
    throw new Error(error.message)
  }
}

// Consultar un documento
export const consultarDocumentoDatabase = async (nombreDatabase, id) => {
  try {
    const response = await getDoc(doc(database, nombreDatabase, id));
    const document = {
      id: response.id,
      ...response.data()
    }
    console.log(document);
    return document
  } catch (error) {
    throw new Error(error.message)
  }
}

// Actualizar un documento
export const actualizarDocumentoDatabase = async (nombreDatabase, id, data) => {
  try {
    const response = await updateDoc(doc(database, nombreDatabase, id), data)
    console.log(response);
  } catch (error) {
    throw new Error(error.message)
  }
}

// Eliminar un documento
export const eliminarDocumentoDatabase = async (nombreDatabase, id) => {
  try {
    const response = await deleteDoc(doc(database, nombreDatabase, id));
    console.log(response);
  } catch (error) {
    throw new Error(error.message)
  }
}

export const crearUsuario = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential.user);
    console.log(userCredential.user.uid);
    return userCredential.user
  } catch (error) {
    return error;
  }
}

export const loginUsuario = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential.user);
    console.log(userCredential.user.uid);
    return userCredential.user
  } catch (error) {
    return error;
  }
}

export const logOutUsuario = async () => {
  try {
    const response = await signOut(auth)
    console.log(response);
    return response
  } catch (error) {
    return error;
  }
}

export const datosUsuario = () => {
  const user = auth.currentUser;

  if (user) {
    console.log(user);
    return user;
  } else {
    return undefined;
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    usuario = user;
  } else {
    console.log('Usuario ya no esta logueado');
    usuario = undefined;
  }
});
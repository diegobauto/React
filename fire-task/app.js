const firebaseConfig = {
    apiKey: "AIzaSyBd8k4Psv5MFSNkZ8oMNE6dA5ELqjKSicw",
    authDomain: "lista-tareas-7bb92.firebaseapp.com",
    projectId: "lista-tareas-7bb92",
    storageBucket: "lista-tareas-7bb92.appspot.com",
    messagingSenderId: "924456057363",
    appId: "1:924456057363:web:f2a36a194d59c50eb91de6",
    measurementId: "G-B9NS10QZL3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   Declarar variables globales
const auth = firebase.auth()
const proveedor = new firebase.auth.GoogleAuthProvider()
const database = firebase.firestore()
let usuarioActual;
let listaTareas = []

// Variables DOM
const btnLogin = document.getElementById('button-login')
const btnLogOut = document.getElementById('button-logout')
const formulario = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const contendorTarea = document.getElementById('todos-container')

console.log(input);

async function login(){
    try {
        const respuesta =  await auth.signInWithPopup(proveedor)
        console.log(respuesta.user.displayName);
        usuarioActual = respuesta.user

        listaTareas = await leerTareas()

        pintarBrowser(listaTareas)

    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

function logOut(){
    auth.signOut();
}

async function adicionarTarea(texto){
    const tarea = {
        id:uuid.v4(), 
        tarea : texto,
        completada : false,
        user: usuarioActual.displayName
    }
    const respuesta = await guardarTarea(tarea)
    console.log(respuesta);
    input.value = ''
    // console.log(database.collection('lista-tareas').add(tarea))
    listaTareas = await leerTareas()
        pintarBrowser(listaTareas)
}

function pintarBrowser(tareas){
    // contendorTarea
    let contenidoHtml = "";
    tareas.forEach((t)=>{
        contenidoHtml += `
        <li>${t.tarea}</li>
        `
    })
    contendorTarea.innerHTML = contenidoHtml
}

// Base de datos
async function guardarTarea(task){
    try{
       const respuesta = await database.collection('lista-tareas').add(task)
       return respuesta
    }catch(error){
        console.error(error)
        throw new Error(error)
    }
}

async function leerTareas(){
    const tareas = []
    const respuesta = await database.collection('lista-tareas').get()
    respuesta.forEach(function(item){
        // console.log(item.data());
        tareas.push(item.data())
    })
    return tareas
}

// Eventos
// Login
btnLogin.addEventListener('click', (e)=>{
    login()
    // console.dir(btnLogin);
    btnLogin.classList.add('hidden')
    btnLogOut.classList.remove('hidden')
    formulario.classList.remove('hidden')

})
// Logout
btnLogOut.addEventListener('click', (e)=>{
    logOut()
    btnLogin.classList.remove('hidden')
    btnLogOut.classList.add('hidden')
    formulario.classList.add('hidden')
})

// formulario
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(input.value);
    const texto = input.value
    if(texto !== ""){
        adicionarTarea(texto)
    }
})
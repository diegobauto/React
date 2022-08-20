import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

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
const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHG8anK3bQU1EAcL0-rD7RV-0yqcarlbc",
    authDomain: "disneyclone-2.firebaseapp.com",
    projectId: "disneyclone-2",
    storageBucket: "disneyclone-2.appspot.com",
    messagingSenderId: "280825516327",
    appId: "1:280825516327:web:30b316b82ba4bb6abb5902",
    measurementId: "G-R970VQZY4Y"
  };

const app = !firebase.apps.length
 ? firebase.initializeApp(firebaseConfig)
 : firebase.app();
const db = app.firestore()

export { db };

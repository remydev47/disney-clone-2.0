import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCHG8anK3bQU1EAcL0-rD7RV-0yqcarlbc",
    authDomain: "disneyclone-2.firebaseapp.com",
    projectId: "disneyclone-2",
    storageBucket: "disneyclone-2.appspot.com",
    messagingSenderId: "280825516327",
    appId: "1:280825516327:web:30b316b82ba4bb6abb5902",
    measurementId: "G-R970VQZY4Y"
};

const app = !getApps().length ?
 initializeApp(firebaseConfig):getApp()
 const db = getFirestore()
 const storage = getStorage()

 export {app, db, storage }


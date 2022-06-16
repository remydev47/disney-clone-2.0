import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAdt3hiFYC2m9HNJ5THnGwX6yhgW8-2Z54",
   authDomain: "disney-clone-6d827.firebaseapp.com",
   projectId: "disney-clone-6d827",
   storageBucket: "disney-clone-6d827.appspot.com",
   messagingSenderId: "1041346664419",
   appId: "1:1041346664419:web:365343e6776896fe71f2d6"
};

const app = !getApps().length ?
 initializeApp(firebaseConfig):getApp()
 const db = getFirestore(app);
 const storage = getStorage(app);

 export {app, db, storage }


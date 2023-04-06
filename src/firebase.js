import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {  getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDyQwlv7G3gmA_DdGRlZS3LDz_8MhzE7vE",
    authDomain: "clone-f33d4.firebaseapp.com",
    projectId: "clone-f33d4",
    storageBucket: "clone-f33d4.appspot.com",
    messagingSenderId: "1034027302603",
    appId: "1:1034027302603:web:1031f9236715deef37254e",
    measurementId: "G-RGHY0L2WGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const provider = new GoogleAuthProvider();

export { auth, db, provider }
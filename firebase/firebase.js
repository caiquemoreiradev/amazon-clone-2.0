import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsgBh7SjeBa5xyyrrAJzEOMwMSvRK17JQ",
    authDomain: "clone-sonny.firebaseapp.com",
    projectId: "clone-sonny",
    storageBucket: "clone-sonny.appspot.com",
    messagingSenderId: "289033518493",
    appId: "1:289033518493:web:a128375d639b3b277d0374"
  };
// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();

export default db;
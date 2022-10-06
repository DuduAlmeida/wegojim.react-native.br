// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "wegojim-7461a",
  measurementId: "G-ZLC0GMY857",
  messagingSenderId: "294381698971",
  storageBucket: "wegojim-7461a.appspot.com",
  authDomain: "wegojim-7461a.firebaseapp.com",
  apiKey: "AIzaSyCvGEDJzvOB5BHMcNIlXSIhS3a8JywqrNI",
  appId: "1:294381698971:web:ddefb57c56231365482b3e",
  databaseURL: "https://wegojim-7461a-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

export { auth, database, firebase, firebaseApp };

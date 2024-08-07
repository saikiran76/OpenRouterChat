/**
 * Firebase setup
 */


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf6i1roDxqA0-0yJflPMSUsLa3DL0C3us",
  authDomain: "secretchat-2d748.firebaseapp.com",
  projectId: "secretchat-2d748",
  storageBucket: "secretchat-2d748.appspot.com",
  messagingSenderId: "1030230004668",
  appId: "1:1030230004668:web:011e7bb6d5a9fb9425d1b9",
  measurementId: "G-SD16RPQTZP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
auth.languageCode = 'en';
export const provider = new GoogleAuthProvider();
export const database = getDatabase(app);
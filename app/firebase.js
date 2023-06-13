// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQUUykpt7eJGYcDOxqR28gMeqAWF_WUvM",
  authDomain: "expense-tracker-cc-2023.firebaseapp.com",
  projectId: "expense-tracker-cc-2023",
  storageBucket: "expense-tracker-cc-2023.appspot.com",
  messagingSenderId: "170445221770",
  appId: "1:170445221770:web:05177af520a5a27e91e273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

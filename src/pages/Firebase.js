// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ7aMBxxSF9YHsfk4t7kVeVuvfDmU2tzg",
  authDomain: "firestore-9f1e0.firebaseapp.com",
  projectId: "firestore-9f1e0",
  storageBucket: "firestore-9f1e0.appspot.com",
  messagingSenderId: "775959704048",
  appId: "1:775959704048:web:4fbdaac0c556249561ed35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

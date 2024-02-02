// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQFbp8w7QPDLVIcAbaqnrA3qbFIJqgPA8",
  authDomain: "fir-fdbaa.firebaseapp.com",
  projectId: "fir-fdbaa",
  databaseURL: "https://fir-fdbaa-default-rtdb.firebaseio.com",
  storageBucket: "fir-fdbaa.appspot.com",
  messagingSenderId: "443733734457",
  appId: "1:443733734457:web:bd662f01dbae885469c9e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8ghOG51vwtR58NWDaQTKFagRy4Eu2Wts",
  authDomain: "docter-cafe.firebaseapp.com",
  projectId: "docter-cafe",
  storageBucket: "docter-cafe.appspot.com",
  messagingSenderId: "103435492242",
  appId: "1:103435492242:web:f5d976d5eb628a10353f4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

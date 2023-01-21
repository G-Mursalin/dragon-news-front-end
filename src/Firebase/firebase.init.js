import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqoOwRO1rlD6wUIlIr1luPh-p1HlkS54g",
  authDomain: "login-various-way.firebaseapp.com",
  projectId: "login-various-way",
  storageBucket: "login-various-way.appspot.com",
  messagingSenderId: "143327029914",
  appId: "1:143327029914:web:c2c520e4c05055b15a8d23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDLikChcmQ4aAshUoROo7mzm3Fn1DF2q0",
  authDomain: "dr-sarkar-25ed1.firebaseapp.com",
  projectId: "dr-sarkar-25ed1",
  storageBucket: "dr-sarkar-25ed1.appspot.com",
  messagingSenderId: "756392556679",
  appId: "1:756392556679:web:cd9c7e0fab579a470a2022",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

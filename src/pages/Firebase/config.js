// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQi--AIzaSyA4zYATzBWduF5Kvhbi0ST0pgJfnX_o2i8",
  authDomain: "ec-paid-project.firebaseapp.com",
  projectId: "ec-paid-project",
  storageBucket: "ec-paid-project.appspot.com",
  messagingSenderId: "926982976564",
  appId: "1:926982976564:web:ecea7bbb11bb68f1234661",
  measurementId: "G-TK3F7M7RN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const provider = new GoogleAuthProvider();
export {auth,provider}
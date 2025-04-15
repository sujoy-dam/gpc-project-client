// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "guardian-of-paws-and-claws.firebaseapp.com",
  projectId: "guardian-of-paws-and-claws",
  storageBucket: "guardian-of-paws-and-claws.firebasestorage.app",
  messagingSenderId: "524932310808",
  appId: "1:524932310808:web:8991793741b3bdbc6be06d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
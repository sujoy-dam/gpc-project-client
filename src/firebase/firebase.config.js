// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCOQ115gtu41dEUPvolXCCUSiyli6baT60",
//   authDomain: "guardian-of-paws-and-claws.firebaseapp.com",
//   projectId: "guardian-of-paws-and-claws",
//   storageBucket: "guardian-of-paws-and-claws.firebasestorage.app",
//   messagingSenderId: "524932310808",
//   appId: "1:524932310808:web:8991793741b3bdbc6be06d"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
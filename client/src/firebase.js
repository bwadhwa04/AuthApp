// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-5fab9.firebaseapp.com",
  projectId: "mern-auth-5fab9",
  storageBucket: "mern-auth-5fab9.firebasestorage.app",
  messagingSenderId: "516456451208",
  appId: "1:516456451208:web:ea0f0bd95fd5b9dc2d633d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
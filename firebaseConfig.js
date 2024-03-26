// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzzHm3eEd3mO5R68nAFiFJsd-K6zu1cQM",
  authDomain: "languagecontext-122d8.firebaseapp.com",
  projectId: "languagecontext-122d8",
  storageBucket: "languagecontext-122d8.appspot.com",
  messagingSenderId: "588753190703",
  appId: "1:588753190703:web:8d23732d176afe15b72bda"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(FirebaseApp);
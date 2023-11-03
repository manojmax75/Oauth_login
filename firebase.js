import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAFwL5na3NnW1qwrahrtmBZpcuUOT_Mo2E",
  authDomain: "reactauth-8773e.firebaseapp.com",
  projectId: "reactauth-8773e",
  storageBucket: "reactauth-8773e.appspot.com",
  messagingSenderId: "779686574687",
  appId: "1:779686574687:web:4a13a33f478e199d05b9ea",
  measurementId: "G-DG10ZD71L0"
};

const app=initializeApp(firebaseConfig)
export const auth= getAuth(app);
export default app;

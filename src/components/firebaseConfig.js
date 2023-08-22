import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBVQZ1qkRkjxF1Mi0_p6rMMn3PhY_Y29OU",
  authDomain: "reactproyectofinal-7a0fd.firebaseapp.com",
  projectId: "reactproyectofinal-7a0fd",
  storageBucket: "reactproyectofinal-7a0fd.appspot.com",
  messagingSenderId: "427647669159",
  appId: "1:427647669159:web:4fd26a0a89ced9f2bbdc82"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJefbu5mJuj8js6MUbBLP9-4aWmvuJZhQ",
  authDomain: "house-marketplace-141f5.firebaseapp.com",
  projectId: "house-marketplace-141f5",
  storageBucket: "house-marketplace-141f5.appspot.com",
  messagingSenderId: "704965485944",
  appId: "1:704965485944:web:ff95b7506326cc6793148d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

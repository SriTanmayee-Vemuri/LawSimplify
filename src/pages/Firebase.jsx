// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8tOMfkhCD67Gply5Sew-oZy0E-MXc6Oc",
  authDomain: "lawsimplify-a6e76.firebaseapp.com",
  projectId: "lawsimplify-a6e76",
  storageBucket: "lawsimplify-a6e76.firebasestorage.app",
  messagingSenderId: "1069987068145",
  appId: "1:1069987068145:web:9244d00b1f3a8db404d150",
  measurementId: "G-SLH22H7NRQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
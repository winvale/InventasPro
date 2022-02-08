import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFzkqsaf-5MDzXHlO-hOFSUI5fd-4iZLw",
  authDomain: "inventas-app.firebaseapp.com",
  databaseURL: "https://inventas-app-default-rtdb.firebaseio.com",
  projectId: "inventas-app",
  storageBucket: "inventas-app.appspot.com",
  messagingSenderId: "533111161621",
  appId: "1:533111161621:web:33225404310a005e489f1c",
  measurementId: "G-NK2YTKY68M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIRESTORE = getFirestore(app);
export const STORAGE = getStorage(app);

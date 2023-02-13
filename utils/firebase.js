// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { 
  collection,
  getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDzprijswLzZmm7MA6Hw3XhCTaPnt9JJE",
  authDomain: "fb-clone-928bb.firebaseapp.com",
  projectId: "fb-clone-928bb",
  storageBucket: "fb-clone-928bb.appspot.com",
  messagingSenderId: "161488428131",
  appId: "1:161488428131:web:630b5e16e28b7c516a2c56",
  measurementId: "G-0FXRPMS573"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const feedCollectionRef = collection(db, "feed")
export const storage = getStorage(app);
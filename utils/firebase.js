// Import the functions you need from the SDKs you need
import "firebase/storage"
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
const app = !firebaseConfig.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage};
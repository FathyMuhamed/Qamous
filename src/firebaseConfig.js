// src/firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm5LVuaBsfCKF5P0Ok46aFlwNh4zTbc6M",
  authDomain: "qamous-blog.firebaseapp.com",
  projectId: "qamous-blog",
  storageBucket: "qamous-blog.appspot.com",
  messagingSenderId: "222299519996",
  appId: "1:222299519996:web:22d2f565ced17f4a58d079",
  measurementId: "G-434XST6YF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
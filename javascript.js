// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfWtOyGeXPl1m6lBxw7g-94AynEowuEBk",
  authDomain: "energywise-comments.firebaseapp.com",
  projectId: "energywise-comments",
  storageBucket: "energywise-comments.firebasestorage.app",
  messagingSenderId: "879747563602",
  appId: "1:879747563602:web:380a4ed86f62cbb6ec5f8b",
  measurementId: "G-BNGSX4FXF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

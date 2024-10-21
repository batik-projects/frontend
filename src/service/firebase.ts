// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArtxaASDWCBu28C-lO4OWh2BA4FsiPiFo",
  authDomain: "batik-6baf1.firebaseapp.com",
  projectId: "batik-6baf1",
  storageBucket: "batik-6baf1.appspot.com",
  messagingSenderId: "315801047289",
  appId: "1:315801047289:web:39bce6188d8ea1a1581228",
  measurementId: "G-RJ9FNS25TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
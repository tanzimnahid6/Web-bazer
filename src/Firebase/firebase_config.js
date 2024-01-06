// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFiaUDfbI387wyh4dfI8LW7WKRpdz8oKo",
  authDomain: "webbazaar-creations.firebaseapp.com",
  projectId: "webbazaar-creations",
  storageBucket: "webbazaar-creations.appspot.com",
  messagingSenderId: "717869287552",
  appId: "1:717869287552:web:a8769444297c1eda77be65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
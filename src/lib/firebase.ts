// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu2Vr-WTuxvSYD9rRfpLQ5WC_eekqIwp4",
  authDomain: "hearts-of-lead.firebaseapp.com",
  databaseURL: "https://hearts-of-lead-default-rtdb.firebaseio.com",
  projectId: "hearts-of-lead",
  storageBucket: "hearts-of-lead.appspot.com",
  messagingSenderId: "848472563383",
  appId: "1:848472563383:web:92a78455d3249243a53732"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)

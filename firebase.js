// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// إعدادات Firebase الخاصة بمشروع نما
const firebaseConfig = {
  apiKey: "AIzaSyCg7N5Y9K0a1ipo5m9OE3eRW7...", // استبدله بالمفتاح الكامل من شاشتك
  authDomain: "namaa-app-8f003.firebaseapp.com",
  projectId: "namaa-app-8f003",
  storageBucket: "namaa-app-8f003.firebasestorage.app",
  messagingSenderId: "534465419747",
  appId: "1:534465419747:web:458f86edc56d...",
  measurementId: "G-2PYGC0QDL5"
};

// initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1eAHKmpXJ7VySaxPSi9quVhu6-AudySo",
  authDomain: "car-manufacturer-dd339.firebaseapp.com",
  projectId: "car-manufacturer-dd339",
  storageBucket: "car-manufacturer-dd339.appspot.com",
  messagingSenderId: "1055602252768",
  appId: "1:1055602252768:web:cb031aeded54bfea596985"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
export default auth;
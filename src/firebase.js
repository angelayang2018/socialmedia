// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOnDwY-IpUa6FeU30vGL1RCZTifz5qVr0",
  authDomain: "instagram-clone-b8360.firebaseapp.com",
  projectId: "instagram-clone-b8360",
  storageBucket: "instagram-clone-b8360.appspot.com",
  messagingSenderId: "281046022000",
  appId: "1:281046022000:web:4d707d97f307f93e4e81b5",
  measurementId: "G-J9KBV6FMKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};
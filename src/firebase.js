// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxBIMXm2ymNVcWHdPt3SVWLHhaoPBz5Wk",
  authDomain: "instagram-clone-60446.firebaseapp.com",
  projectId: "instagram-clone-60446",
  storageBucket: "instagram-clone-60446.appspot.com",
  messagingSenderId: "482365622888",
  appId: "1:482365622888:web:587d0593049909fcce09dd",
  measurementId: "G-RSD4MDCB9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};
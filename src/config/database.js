// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDdaGke5p-_N3uVvpQTW2zBJ-BFskK9KU",
  authDomain: "fb-restaurante-834fe.firebaseapp.com",
  projectId: "fb-restaurante-834fe",
  storageBucket: "fb-restaurante-834fe.appspot.com",
  messagingSenderId: "1007548099410",
  appId: "1:1007548099410:web:fd6d2f194ab0670cdfa88b",
  measurementId: "G-Q01J0GS63Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
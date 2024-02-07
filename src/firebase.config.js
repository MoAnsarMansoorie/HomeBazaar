// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjfQUiqnHz5fNlNKaJOxviSrGyQgxGkzA",
  authDomain: "house-market-84e29.firebaseapp.com",
  projectId: "house-market-84e29",
  storageBucket: "house-market-84e29.appspot.com",
  messagingSenderId: "135492464819",
  appId: "1:135492464819:web:dc38c61be262e891f380c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
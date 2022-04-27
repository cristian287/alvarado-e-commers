import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvhXVcM1P3kl5zt14oYrjgi1SwsjOKnQo",
  authDomain: "happy-hour287.firebaseapp.com",
  projectId: "happy-hour287",
  storageBucket: "happy-hour287.appspot.com",
  messagingSenderId: "1027942602987",
  appId: "1:1027942602987:web:a155594e9b6444e03f06ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore (app)
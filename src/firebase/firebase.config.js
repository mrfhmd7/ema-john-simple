// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYgSx10mje3lhdsSdQbssLIPEQPD27Kqs",
  authDomain: "ema-john-with-firebase-a-f754d.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-f754d",
  storageBucket: "ema-john-with-firebase-a-f754d.appspot.com",
  messagingSenderId: "752151978370",
  appId: "1:752151978370:web:f3ca0d5a291a43ccc16f9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
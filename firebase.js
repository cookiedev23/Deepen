// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxtAzUi_xSSPDP3ILunHbEZrEN0h_pXHA",
  authDomain: "deepen-147da.firebaseapp.com",
  projectId: "deepen-147da",
  storageBucket: "deepen-147da.appspot.com",
  messagingSenderId: "652029653503",
  appId: "1:652029653503:web:2bebe81351aae52d8837ca"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

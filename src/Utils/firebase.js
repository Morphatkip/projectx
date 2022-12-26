import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
/* import env from "react-dotenv"; */
const firebaseConfig = {
  /*  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID, */
  apiKey: "AIzaSyAddAWptNyAlUXc9spZl7zizrVNlUv4zVY",
  authDomain: "testecommerce-443cf.firebaseapp.com",
  projectId: "testecommerce-443cf",
  storageBucket: "testecommerce-443cf.appspot.com",
  messagingSenderId: "526459250412",
  appId: "1:526459250412:web:5f174939296c6c2696e7c9",
  measurementId: "G-07CZSJ4NRD",
};
// initialize firebase and firebase authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {
  auth,
  db,
  doc,
  getDoc,
  collection,
  getDocs,
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRB_rE7NOkmDMmxtlbD8Z2N-MZ_VuVpV8",
  authDomain: "ema-jhon-simple-863e5.firebaseapp.com",
  projectId: "ema-jhon-simple-863e5",
  storageBucket: "ema-jhon-simple-863e5.appspot.com",
  messagingSenderId: "496810616713",
  appId: "1:496810616713:web:59cba908d93035915ca358",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

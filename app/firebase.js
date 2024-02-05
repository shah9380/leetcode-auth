// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries\
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIkghFCAl8fMz2mnUv_fHc_h9NWfcyXpU",
  authDomain: "leetcode-auth-1b84e.firebaseapp.com",
  projectId: "leetcode-auth-1b84e",
  storageBucket: "leetcode-auth-1b84e.appspot.com",
  messagingSenderId: "1045267128715",
  appId: "1:1045267128715:web:cfe310aafcc5d8176c0f8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
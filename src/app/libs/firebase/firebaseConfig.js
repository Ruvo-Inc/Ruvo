import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqCKpWJlnPrhsiDcgqe02CRThZ9JGBhaM",
    authDomain: "causal-setting-417421.firebaseapp.com",
    projectId: "causal-setting-417421",
    storageBucket: "causal-setting-417421.appspot.com",
    messagingSenderId: "218920345662",
    appId: "1:218920345662:web:14950b6a3cb6fde446f16f"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { app, db } 




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQeUv5sfTaBBvjWHoisBIkj-9rjDtHNG8",
  authDomain: "cprg306-assignments-aad71.firebaseapp.com",
  projectId: "cprg306-assignments-aad71",
  storageBucket: "cprg306-assignments-aad71.firebasestorage.app",
  messagingSenderId: "603749182032",
  appId: "1:603749182032:web:f7859e8f5e83fe84a3bf55",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
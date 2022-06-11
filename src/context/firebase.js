
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoAQwvZvLOENIaDtQ9epV5usO0lPv2qDk",
  authDomain: "linkedin-clone-by-akash.firebaseapp.com",
  projectId: "linkedin-clone-by-akash",
  storageBucket: "linkedin-clone-by-akash.appspot.com",
  messagingSenderId: "407771167249",
  appId: "1:407771167249:web:1bf13c49bacf9896208fb0",
  measurementId: "G-KR1EFCNQHK"
};

 const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
   export const storage = getStorage(app);
   export  const db = getFirestore(app);

export default {app};
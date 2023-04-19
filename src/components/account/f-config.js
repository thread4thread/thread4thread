import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyClbpXxH3iFOGQmpOlwXOw5DI9Eowc93I8",
    authDomain: "thread4thread-b1b5d.firebaseapp.com",
    databaseURL: "https://thread4thread-b1b5d-default-rtdb.firebaseio.com",
    projectId: "thread4thread-b1b5d",
    storageBucket: "thread4thread-b1b5d.appspot.com",
    messagingSenderId: "962327641859",
    appId: "1:962327641859:web:0835f15d56150deae5b336",
    measurementId: "G-T4XLTL80EL"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);

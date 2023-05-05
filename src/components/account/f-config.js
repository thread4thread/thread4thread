import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import firebaseui from 'firebaseui'



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

  // const uiConfig = ({
  //   signInSuccessUrl: '/',
  //   signInOptions: [
  //     window.firebase.auth.GoogleAuthProvider.PROVIDER_ID
  //   ],
  //   tosUrl: '/terms-of-service' // This doesn't exist yet
  // })
  
  // // This must run before any other firebase functions
  // window.firebase.initializeApp(config)
  
  // // This sets up firebaseui
  // const ui = new firebaseui.auth.AuthUI(window.firebase.auth())
  
  // // This adds firebaseui to the page
  // // It does everything else on its own
  // export const startFirebaseUI = function (elementId) {
  //   ui.start(elementId, uiConfig)
  // }
  
  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);
  export const auth = getAuth(app);



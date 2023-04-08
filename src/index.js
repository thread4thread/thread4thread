import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

// FIREBASE
// =================================================================
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Use firebase UI for authentication
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClbpXxH3iFOGQmpOlwXOw5DI9Eowc93I8",
  authDomain: "thread4thread-b1b5d.firebaseapp.com",
  projectId: "thread4thread-b1b5d",
  storageBucket: "thread4thread-b1b5d.appspot.com",
  messagingSenderId: "962327641859",
  appId: "1:962327641859:web:0835f15d56150deae5b336",
  measurementId: "G-T4XLTL80EL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

//detect auth state
onAuthStateChanged(auth, user => {
  if(user != null) {
    console.log('Logged in!');
  } else {
    console.log('No user.');
  }
});
// =================================================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <App />
  </Router>
  // </React.StrictMode>
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
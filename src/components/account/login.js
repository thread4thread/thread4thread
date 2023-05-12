import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateCurrentUser } from 'firebase/auth';
import {auth} from './f-config';
import { Link, NavLink, Navigate, Route, redirect, useNavigate } from 'react-router-dom';
import {getAuth, GoogleAuthProvider, EmailAuthProvider} from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { UserProfile } from '../profile/user-profile';
import { ListsAllTypes } from '../browsing/lists-all-types';
// import { home } from '../browsing/lists-all-types';


const firebaseUIConfig = {
    // allow email sign in
    signInOptions: [
        { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'redirect', //don't redirect to authenticate
    credentialHelper: 'none', //don't show the email account chooser
    callbacks: {
      signInSuccessWithAuthResult: () => {
        return false; //don't redirect after authentication
      }
    }
  }

export function LogIn(props) {

// const auth = getAuth();
    console.log(props.user);

  // Redirect to profile page when logged in
  // change to redirect!!!!!!!
let navigate = useNavigate();

  if (props.user) {
    return (
      <Navigate to="/"/>
    )

  }


return (
<div className="content-wrap">
    <Link to="/welcome">
    <button type="button" className="btn arrow-btn">
        <img src={ArrowIcon} alt="return"/>
      </button>
      </Link>
    <div className="login">
        <h1>Login</h1>
        <div id="root"></div>
            <div>
                {/* <input type="email" className="input-box" placeholder="Email" required onChange={(event)=>{setLoginEmail(event.target.value)}}/><br></br>
                <input type="password" className="input-box" placeholder="Password" required onChange={(event)=>{setLoginPassword(event.target.value)}}/><br></br>
                <a href="#">Forgot password?</a><br></br>
                <Link to="/thread4thread">
                <button type="button" className="purp-button" onClick={login
                }>login</button>
                </Link> */}
                {/* <br></br> */}
                <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
            </div>
        </div>
    </div>
)
}



    //make sure the user stays logged in when using the website
    //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);



/*
this will be used to retrieve their email address and display it in the profile page
{user ? (
    <div>
      <p>Welcome, {user.email}!</p>
      <p>This is your profile page.</p>
    </div>
  ) : (
    <p>You need to log in to view this page.</p>
  )}

  */
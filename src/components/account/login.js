import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateCurrentUser } from 'firebase/auth';
import {auth} from './f-config';
import { Link } from 'react-router-dom';






export function LogIn() {

    
    /*const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })*/ 

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState(null);


    //make sure the user stays logged in when using the website
    //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user)
            } catch (error) {
                console.log(error.message)
            }
        };
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
                <input type="email" className="input-box" placeholder="Email" required onChange={(event)=>{setLoginEmail(event.target.value)}}/><br></br>
                <input type="password" className="input-box" placeholder="Password" required onChange={(event)=>{setLoginPassword(event.target.value)}}/><br></br>
                <a href="#">Forgot password?</a><br></br>
                <Link to="/thread4thread">
                <button type="button" className="purp-button" onClick={login
                }>login</button>
                </Link>
                <br></br>
            </div>
        </div>
    </div>
)
}

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
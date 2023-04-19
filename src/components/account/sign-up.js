// LISTINGS OF ALL TYPES - Displays fields that allow user to sign up (email, password, username, name).
// User must check "I consent" to be able to sign up.

// PACKAGES
// import { NavLink } from 'react-router-dom';

// ICONS
import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from './f-config';

//import { getAuth, EmailAuthProvider } from "firebase/auth";
//import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
//import { Navigate } from "react-router-dom";


export function SignUp() {

    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    //const [loginEmail, setLoginEmail] = useState("");
    //const [loginPassword, setLoginPassword] = useState("");


    //const login = async () => {};

    const signup = async () => {
        try {
        const user = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
        console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    };



    //const logout = async () => {};


    return (
    <div className="content-wrap">
        <button type="button" className="btn arrow-btn">
            <img src={ArrowIcon} alt="return"/>
            {/* <!-- <span className="arrow">&#8592;</span> --> */}
        </button>
        <div className="sign-up">
            <h1>Sign up</h1>
            <div>
                <input type="email" className="input-box" placeholder="Email" required onChange={(event)=>{setSignupEmail(event.target.value)}}/><br></br>
                <input type="password" className="input-box" placeholder="Password" required onChange={(event)=>{setSignupPassword(event.target.value)}}/><br></br>
                <input type="text" className="input-box" placeholder="Username" required/><br></br>
                <input type="text" className="input-box" name="name" placeholder="Name (optional)"/><br></br>
                <p className="check"><span><input type="checkbox"/></span> I consent to thread4threads privacy policy and terms and conditions.</p>
                <button type="button" className="btn purp-button" onClick={signup
                }>Sign up</button>
            </div>
        </div>
    </div>
    )
}
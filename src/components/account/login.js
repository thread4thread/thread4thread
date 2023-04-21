import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateCurrentUser } from 'firebase/auth';
import {auth} from './f-config';




export function LogIn() {

    
    /*const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })*/ 

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

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
    <button type="button" className="btn arrow-btn">
        <img src="../icon/keyboard-arrow-return.png" alt="return"/>
      </button>
    <div className="login">
        <h1>Login</h1>
        <div id="root"></div>
            <div>
                <input type="email" className="input-box" placeholder="Email" required onChange={(event)=>{setLoginEmail(event.target.value)}}/><br></br>
                <input type="password" className="input-box" placeholder="Password" required onChange={(event)=>{setLoginPassword(event.target.value)}}/><br></br>
                <a href="#">Forgot password?</a><br></br>
                <button type="button" className="purp-button" onClick={login
                }>Login</button><br></br>
            </div>
        </div>
    </div>
)
}
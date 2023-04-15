// LISTINGS OF ALL TYPES - Displays fields that allow user to sign up (email, password, username, name).
// User must check "I consent" to be able to sign up.

// PACKAGES
// import { NavLink } from 'react-router-dom';

// ICONS
import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png'

export function SignUp() {
    return (
    <div className="content-wrap">
        <button type="button" className="btn arrow-btn">
            <img src={ArrowIcon} alt="return"/>
            {/* <!-- <span className="arrow">&#8592;</span> --> */}
        </button>
        <div className="sign-up">
            <h1>Sign up</h1>
            <div>
                <input type="email" className="input-box" placeholder="Email" required/><br></br>
                <input type="password" className="input-box" placeholder="Password" required/><br></br>
                <input type="text" className="input-box" placeholder="Username" required/><br></br>
                <input type="text" className="input-box" name="name" placeholder="Name (optional)"/><br></br>
                <p className="check"><span><input type="checkbox"/></span> I consent to thread4threads privacy policy and terms and conditions.</p>
                <button type="button" className="btn purp-button">Sign up</button>
            </div>
        </div>
    </div>
    )
}
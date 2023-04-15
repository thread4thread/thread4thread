// PACKAGES
// import { NavLink } from 'react-router-dom';

// ICONS
// import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png'

export function Welcome() {
    return (
        <div>
            <div className="login">
                <img src="../img/t4t-Logo" alt="link to index" className="logos-welcome" />
                <h1 className="welcome-h">Welcome to thread4thread</h1>
            </div>
            <div className="welcome">
                <button type="button" className="purp-button-welcome">Login</button>
                <button type="button" className="purp-button-welcome">Sign up</button>
            </div>
        </div>
    )
}
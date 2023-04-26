// PACKAGES
// import { NavLink } from 'react-router-dom';

// ICONS
// import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png'

import { Link } from 'react-router-dom';

export function Welcome() {
    return (
        <main class="content-wrap">
        <div class="login">
            <img src="../img/t4t-Logo" alt="link to index" class="logos-welcome"/>
            <h1 class="welcome-h">Welcome to thread4thread</h1>
        </div>
        <div class="welcome">
            <Link to="/login">
            <button type="button" class="purp-button-welcome">Login</button>
            </Link>
            <Link to="/sign-up">
            <button type="button" class="purp-button-welcome">Sign up</button>
            </Link>
        </div>
    </main>
    )
}
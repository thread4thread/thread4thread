// PACKAGES
// import { NavLink } from 'react-router-dom';

// ICONS
// import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png'

import { Link } from 'react-router-dom';
import logoPic  from '../../components/navbar/navbar.assets/logo2.png';

export function Welcome() {
    return (
     <main className="content-wrap">
        <div className='justify-content-center'>
            <div className="login">
                <img src={logoPic} alt="link to index" className="logos-welcome"/>
                <h1 className="welcome-h">Welcome to thread4thread</h1>
            </div>
            <div className="welcome">
                <Link to="/login">
                <button type="button" className="purp-button-welcome">Login</button>
                </Link>
                <Link to="/sign-up">
                <button type="button" className="purp-button-welcome">Sign up</button>
                </Link>
            </div>
        </div>
    </main>
    )
}
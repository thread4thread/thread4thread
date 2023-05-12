// NAVIGATION ICON - Returns clickable navigation icon.
// Inputs:
    // src - Filepath
    // classN - Style
// Output: Clickable navigation icon.

// PACKAGES
import { NavLink } from 'react-router-dom';
import React from 'react';
import { accountActive} from '../../../assets/icon/account-active.png'
import { homeActive} from '../../../assets/icon/home-active.png'
import { mailActive} from '../../../assets/icon/mail-active.png'
import { addActive} from '../../../assets/icon/add-active.png'

// TODO: Do all button/icon creation in one file, then import where needed?

// TODO: Figure out why we have to add "default" here
export default function NavIcon(props) {
    let {src, classN, navPath} = props;
    let iName = src + "";
    let iconName = "";
    
    // TODO: For some reason, only "navbar-brand" works with top-nav icons and "col" works with bot-nav icons. It would be great if there could just be 1 class that works for both.
    return (
        <NavLink to={navPath} className={iconName + classN}>
            <img src={src} alt={iName}/>
        </NavLink>
    )
}



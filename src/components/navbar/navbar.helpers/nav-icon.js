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

    function handleClick(event) {
        // event.preventDefault();
        let newiName = iName.indexOf('.');
        let iconName = iName.slice(28, newiName);
        event.target.classList.toggle(iconName);
        //event.target.classList.toggle('active');
       // console.log(event.target.classList);
        //console.log(iName);
        // if(event.target.classList.contains('active')) {
        //     src = iName.slice(0, newiName) + "-active" + iName.slice(newiName);
        //     console.log(src);
        // } 

        if(event.target.classList.contains(iconName)) {
            src = '../../../assets/icon/' + iconName + '-active.png';
            console.log(src);
        }

        //console.log(src);

        //console.log(src);
        // else {
        // let index = applyFilters.indexOf(event.target.value)
        // applyFilters.splice(index, 1);
        // }
    }

   // console.log(src);

    
    // TODO: For some reason, only "navbar-brand" works with top-nav icons and "col" works with bot-nav icons. It would be great if there could just be 1 class that works for both.
    return (
        <NavLink onClick={handleClick} to={navPath} className={classN}>
            <img src={src} alt={iName}/>
        </NavLink>
    )
}



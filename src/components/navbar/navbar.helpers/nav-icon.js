// NAVIGATION ICON - Returns clickable navigation icon.
// Inputs:
    // src - Filepath
    // classN - Style
// Output: Clickable navigation icon.

// PACKAGES
import { NavLink } from 'react-router-dom';
import React from 'react';

// TODO: Do all button/icon creation in one file, then import where needed?

// TODO: Figure out why we have to add "default" here
export default function NavIcon(props) {
    let {src, classN, navPath} = props;
    let iName = src + "";

    function handleClick(event) {
        // event.preventDefault();
        event.target.classList.toggle('active');
        //console.log(iName);
        if(event.target.classList.contains('active')) {
            let newiName = iName.indexOf('.');
            src = iName.slice(0, newiName) + "-active" + iName.slice(newiName);
            
        } 
        //console.log(src);
        // else {
        // let index = applyFilters.indexOf(event.target.value)
        // applyFilters.splice(index, 1);
        // }
    }
    
    // TODO: For some reason, only "navbar-brand" works with top-nav icons and "col" works with bot-nav icons. It would be great if there could just be 1 class that works for both.
    return (
        <NavLink onClick={handleClick} to={navPath} className={classN}>
            <img src={src} alt={iName}/>
        </NavLink>
    )
}



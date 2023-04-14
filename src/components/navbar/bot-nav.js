// BOTTOM NAVIGATION BAR - Displays navigation to home, exchanges, create listing, fav listings, and profile.
// User clicks home icon to navigate to unfiltered list-all-types.
// User clicks mail icon to navigate to exchanges.
// User clicks plus icon to navigate to create-list.
// User clicks heart icon to navigate to fav-lists
// User clicks profile icon to navigate to my-profile.

// HELPERS
import NavIcon from './navbar.helpers/nav-icon';

// ICONS
// TODO: Dynamically bold icons depending on what page you're on
import homeIcon from './navbar.assets/home.png';
import mailIcon from './navbar.assets/mail.png';
import plusIcon from './navbar.assets/add.png';
import heartIcon from './navbar.assets/heart.png';
import userIcon from './navbar.assets/user.png';
import { useResolvedPath } from 'react-router-dom';
const iconArr = [homeIcon, mailIcon, plusIcon, heartIcon, userIcon]
const navPaths = ['', 'my-exchanges', 'create-listing', 'my-favorite-listings', 'my-profile'];
// TODO: Figure out how to import data + put icons in a data structure to be more dynamic

export function BotNav() {
    let i = 0;

    let iconElemArr = iconArr.map((icon) => {
        let navPath = navPaths[i]
        i+=1;

        return (
        <NavIcon src={icon}
            classN={"col"}
            navPath={navPath}
            key={icon+""}/>
        )
    });

    return (
    <nav className="container-fluid bottom-nav text-center top-bot-wrap">
        <div className="row">
            { iconElemArr }
        </div>
    </nav>
    )
}

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
import homeIcon from '../../assets/icon/home.png';
import mailIcon from '../../assets/icon/mail.png';
import plusIcon from '../../assets/icon/add.png';
import userIcon from '../../assets/icon/account.png';
// import { useResolvedPath } from 'react-router-dom';
const iconArr = [homeIcon, mailIcon, plusIcon, userIcon]
const navPaths = ['', 'my-exchanges', 'create-list', 'my-profile'];
// TODO: Figure out how to import data + put icons in a data structure to be more dynamic

export function BotNav() {
    let i = 0;

    let iconElemArr = iconArr.map((icon) => {
        let navPath = navPaths[i]
        i+=1;
        // console.log(iconArr);

        return (
        <NavIcon src={icon}
            classN={"col bottom-nav-icon"}
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
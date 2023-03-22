// BOTTOM NAVIGATION BAR - Displays navigation to home, exchanges, create listing, fav listings, and profile.
// User clicks home icon to navigate to unfiltered list-all-types.
// User clicks mail icon to navigate to exchanges.
// User clicks plus icon to navigate to create-list.
// User clicks heart icon to navigate to fav-lists
// User clicks profile icon to navigate to my-profile.

// ICONS
import homeIcon from './navbar.assets/home.png'
import mailIcon from './navbar.assets/mail.png'
import addIcon from './navbar.assets/add.png'
import heartIcon from './navbar.assets/heart.png'
import profileIcon from './navbar.assets/user.png'

export function BotNav() {
    return (
    <nav className="container-fluid bottom-nav text-center top-bot-wrap">
        <div className="row">
            <a className="col" href="../index.html"><img src={homeIcon} alt="home"/></a>
            <a className="col" href="../notifications/notif.html"><img src={mailIcon} alt="message"/></a>
            <a className="col" href="../create-listing/create-listing.html"><img src={addIcon} alt="add"/></a>
            <a className="col" href=""><img src={heartIcon} alt="liked"/></a>
            <a className="col" href="../profile/own-profile.html"><img src={profileIcon} alt="profile"/></a>
        </div>
    </nav>
    )
}
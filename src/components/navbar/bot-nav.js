// BOTTOM NAVIGATION BAR - Displays navigation to home, exchanges, create listing, fav listings, and profile.
// User clicks home icon to navigate to unfiltered list-all-types.
// User clicks mail icon to navigate to exchanges.
// User clicks plus icon to navigate to create-list.
// User clicks heart icon to navigate to fav-lists
// User clicks profile icon to navigate to my-profile.

// HELPERS
import NavIcon from './navbar.helpers/nav-icon'

// ICONS
// TODO: Dynamically bold icons depending on what page you're on
import home from './navbar.assets/home.png'
import mail from './navbar.assets/mail.png'
import add from './navbar.assets/add.png'
import heart from './navbar.assets/heart.png'
import profile from './navbar.assets/user.png'
let iconArr = [home, mail, add, heart, profile]

export function BotNav() {
    let iconElemArr = iconArr.map((icon) => {
        let iName = icon + ""

        return (
            <NavIcon src={icon}
             iName={iName}
             classN={"col"}
             key={iName}/>
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

// function NavIcon(props) {
//     let {src, iName} = props;
    
//     return (
//         <a className="col" href="../index.html"><img src={src} alt={iName}/></a>
//     )
// }
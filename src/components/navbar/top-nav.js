// TOP NAVIGATION BAR - Displays navigation to home, search/filter, and create listing.
// User clicks Logo to navigate to unfiltered list-all-types.
// User clicks search bar to navigate to search-filter.
// User clicks plus icon to navigate to create-list.

// PACKAGES
import { NavLink } from 'react-router-dom';

// HELPERS
import NavIcon from './navbar.helpers/nav-icon';

// ICONS
import home from './navbar.assets/logo2.png';
import addIcon from './navbar.assets/add.png';

export function TopNav() {
    return (
    <nav className="content-wrap topnav navbar navbar-expand-lg">
         <div className="container-fluid nav-container">
            {/* <NavLink to="/"> */}
                <NavIcon src={home} classN={"navbar-brand"}/>
            {/* </NavLink> */}
            <a href="../view-listings/search-filter.html">
                <form className="d-flex input-group search-bar" role="search">
                    <input type="search" className="form-control search" placeholder="Search" aria-label="Search"/>
                </form>
            </a>
            <NavIcon src={addIcon} classN={"navbar-brand"}/>
        </div>
    </nav>
    )
}
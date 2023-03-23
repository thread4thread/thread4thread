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
            {/* Logo (click to go home) */}
            <NavIcon src={home} classN={"navbar-brand"} navPath={""}/>

            <SearchBar/>

            {/* Plus icon (click to create new listing) */}
            <NavIcon src={addIcon} classN={"navbar-brand"} navPath={"create-listing"}/>
        </div>
    </nav>
    )
}

function SearchBar() {
    return (
        <NavLink to="search-filter">
            <form className="d-flex input-group search-bar" role="search">
                <input type="search" className="form-control search" placeholder="Search" aria-label="Search"/>
            </form>
        </NavLink>
    )
}
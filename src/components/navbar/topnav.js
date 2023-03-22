// TOP NAVIGATION BAR - Displays navigation to home, search/filter, and create listing.
// User clicks Logo to navigate to unfiltered list-all-types.
// User clicks search bar to navigate to search-filter.
// User clicks plus icon to navigate to create-list.

// ICONS
import logo from './navbar.assets/logo2.png'
import addIcon from './navbar.assets/add.png'

export function TopNav() {
    return (
    <nav className="content-wrap topnav navbar navbar-expand-lg side-wrap">
        <div className="container-fluid nav-container">
            <a className="navbar-brand" href="../index.html">
                <img src={logo} alt="link to index"/>
            </a>
            <a href="../view-listings/search-filter.html">
                <form className="d-flex input-group search-bar" role="search">
                    <input type="search" className="form-control search" placeholder="Search" aria-label="Search"/>
                </form>
            </a>
            <a href="../create-listing/create-listing.html">
                <button type="button" className="btn">
                    <img src={addIcon} alt="add a clothes for exchange" className="nav-btn"/>
                </button>
            </a>
        </div>
    </nav>
    )
}
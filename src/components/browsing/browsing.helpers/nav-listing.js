// NAVIGATION LISTING - Returns clickable listing that navigates to its listing details.
// Inputs:
    // navTo - navigation path
    // src - image path
    // alt - alt text
    // classN - style
// Output: Clickable listing.

// PACKAGES
import { NavLink } from "react-router-dom";


// TODO: Consolidate with nav-icon, which performs a similar task with similar inputs
export default function NavListing(props) {
    const { navTo, src, alt, item, title } = props;
    return (
        <NavLink to={navTo} onClick={() => localStorage.setItem("listing", item)}>
            <div className="img-container">
                <img src={src} alt={alt} className={"grid-item"} width="100%" height="100%"/>
                <div className="title bottom-left">{title}</div>
            </div>
           
        </NavLink>
    )
}
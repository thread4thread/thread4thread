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
    const { navTo, src, alt, classN } = props;

    return (
        <NavLink to={navTo} className={"grid-item"}>
            <img src={src} alt={alt} className={classN} />
        </NavLink>
    )
}
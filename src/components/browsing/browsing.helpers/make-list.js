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
export default function NavList(props) {
    const { navTo, src, alt, classN } = props;

    return (
        <NavLink to={navTo}>
            <img src={src} alt={"Black tank top, pink+purple skirt"} className={"grid-item"} />
        </NavLink>
    )
}
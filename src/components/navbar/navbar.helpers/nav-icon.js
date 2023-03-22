// NAVIGATION ICON - Returns clickable navigation icon.
// Inputs:
    // src - Filepath
    // iName - Icon name
// Output: Clickable navigation icon.

// PACKAGES
import { NavLink } from 'react-router-dom';

// TODO: Why do we have to add "default" here?
export default function NavIcon(props) {
    let {src, classN} = props;
    let iName = src + "";
    
    // TODO: For some reason, only "navbar-brand" works with top-nav icons and "col" works with bot-nav icons. It would be great if there could just be 1 class that works for both.
    return (
        <NavLink to="/" className={classN}>
            <img src={src} alt={iName}/>
        </NavLink>
    )
}
// NAVIGATION ICON - Returns clickable navigation icon.
// Inputs:
    // src - Filepath
    // iName - Icon name
// Output: Clickable navigation icon.

// TODO: Why do we have to add "default" here?
export default function NavIcon(props) {
    let {src, iName, classN} = props;
    
    // TODO: For some reason, only "navbar-brand" works with top-nav icons and "col" works with bot-nav icons. It would be great if there could just be 1 class that works for both.
    return (
        <a className={classN} href="../index.html"><img src={src} alt={iName}/></a>
    )
}
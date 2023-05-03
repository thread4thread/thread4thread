// LISTING GRID
// Inputs:
//  - listingsObj - Object that contains listing objects
//  - nCols - Number of listings per row (currently only supports 2 or 3)
//  - max (optional) - Maximum number of listings to display
// Output: A grid of listing images, where clicking on one takes the user to the listing's details page.

// HELPERS
import NavListing from "./nav-listing";

export function ListingGrid(props) {
    let { listingsObj, nCols, max } = props;
    let listingKeyArr = Object.keys(listingsObj);

    // Apply a limit to number of listings displayed if optional max parameter included
    if (max != null) {
        listingKeyArr = listingKeyArr.slice(0, max);
    };

    let listingElemArr = listingKeyArr.map((listingKey) => {
        let listingObj = listingsObj[listingKey];
        let filePath = listingObj.filePath;
        let alt = listingObj.title;
        let title = listingObj.title;

        return (
            <NavListing navTo="../list-details" src={filePath} alt={alt} item={listingKey.toString()} title={title} key={listingKey}/>
        )
    });

    return (
        <div className={"grid by-" + nCols}>
            {listingElemArr}
        </div>
    )
}
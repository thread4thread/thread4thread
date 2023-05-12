// LISTING GRID
// Inputs:
//  - listingsObj - Object that contains listing objects
//  - nCols - Number of listings per row (currently only supports 2 or 3)
//  - max (optional) - Maximum number of listings to display
// Output: A grid of listing images, where clicking on one takes the user to the listing's details page.

// HELPERS
import NoResults from "../no-results";
import NavListing from "./nav-listing";

export function ListingGrid(props) {
    let { listingsObj, nCols, max } = props;
    let listingKeyArr = Object.keys(listingsObj);
    // console.log(listingsObj);
    // Apply a limit to number of listings displayed if optional max parameter included
    if (max != null) {
        listingKeyArr = listingKeyArr.slice(0, max);
    };

    //console.log(listingsObj);

    // let listingElemArr = listingKeyArr.map((listingKey) => {
    //     let listingObj = listingsObj[listingKey];
    //     let filePath = listingObj.filePath;
    //     let alt = listingObj.title;
    //     let title = listingObj.title;
    //     //console.log("nav listing");
    //     return (
    //         <NavListing navTo="../list-details" src={filePath} alt={alt} item={listingKey.toString()} title={title} key={listingKey}/>
    //     )
    // });

    let listingElemArr = listingsObj.map((list) => {
        // console.log(list.filePath);
        let listingKey = list.itemID;
        //let listingObj = 'cvadfvad';
        let filePath = list.filePath;
        let alt = list.title;
        let title = list.title;
        //console.log("nav listing");
        return (
            <NavListing navTo="../list-details" src={filePath} alt={alt} item={listingKey} title={title} key={listingKey}/>
        )
    });

    if(listingElemArr.length == 0){
        return <NoResults/>
    }

    return (
        <div className={"grid by-" + nCols }>
            {listingElemArr}
        </div>
    )
}
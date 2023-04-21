import NavListing from "./nav-listing";

export function ListingGrid(props) {
    let { listingsObj, listingKeyArr } = props;

    let listingElemArr = listingKeyArr.map((listingKey) => {
        let listingObj = listingsObj[listingKey];

        let filePath = listingObj.filePath;
        let alt = listingObj.alt;

        return (
            <NavListing navTo="../list-details" src={filePath} alt={alt} key={listingKey}/>
        )
    });

    return (
        <div className="grid by-2">
            {listingElemArr}
        </div>
    )
}
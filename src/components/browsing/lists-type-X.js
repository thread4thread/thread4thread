// LISTINGS OF TYPE X - Displays rows of 2 listings of one type (Donations, Trades, Requests).
// User can click "Filters" to edit search and filters.
// User can click a listing to view it in detail.

// DATA
import pinkSkirtImg from './../../assets/img/pink-skirt.jpg';

// HELPERS
import NavList from './browsing.helpers/nav-list';

export function ListsTypeX() {
    let altProp = "Black tank top, pink+purple skirt";
    let classNProp = "grid-item";

    return (
        <div className="side-wrap box column">

        <div className="box column top-bot-wrap">            
            {/* <!-- Offers heading + "See more" button --> */}
            <div className="box">
                <h1 className="left-item">All Offers</h1>
                <a href="search-filter.html">
                    <button type="button" className="btn accent-button right-item"><u>Filters</u></button>
                </a>
            </div>


            {/* <!-- Offer listings --> */}
            <div className="grid by-2">
                <NavList src={pinkSkirtImg} navTo="list-details" alt={altProp} classN={classNProp}/>
                <NavList src={pinkSkirtImg} navTo="list-details" alt={altProp} classN={classNProp}/>
                <NavList src={pinkSkirtImg} navTo="list-details" alt={altProp} classN={classNProp}/>
                <NavList src={pinkSkirtImg} navTo="list-details" alt={altProp} classN={classNProp}/>
                <NavList src={pinkSkirtImg} navTo="list-details" alt={altProp} classN={classNProp}/>
                <NavList src={pinkSkirtImg} navTo="list-details" alt={altProp} classN={classNProp}/>
                <NavList src={pinkSkirtImg} navTo="list-details" alt={altProp} classN={classNProp}/>
                <NavList src={pinkSkirtImg} navTo="list-details" alt={altProp} classN={classNProp}/>
                <NavList src={pinkSkirtImg} navTo="list-details" alt={altProp} classN={classNProp}/>
                <NavList src={pinkSkirtImg} navTo="list-details" alt={altProp} classN={classNProp}/>
                <NavList src={pinkSkirtImg} navTo="list-details" alt={altProp} classN={classNProp}/>
            </div>

            {/* <!-- End of results --> */}
            <p className="center-item-vert">End of results!</p>
        </div>

        </div>
    )
}
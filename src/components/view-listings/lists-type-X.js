// LISTINGS OF TYPE X - Displays rows of 2 listings of one type (Donations, Trades, Requests).
// User can click "Filters" to edit search and filters.
// User can click a listing to view it in detail.

// DATA
import pinkSkirtImg from './../../assets/img/pink-skirt.jpg';

export function ListsTypeX() {
    return (
        <>

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
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
            </div>

            {/* <!-- End of results --> */}
            <p className="center-item-vert">End of results!</p>
        </div>

        </>
    )
}
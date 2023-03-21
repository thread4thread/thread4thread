// LISTINGS OF ALL TYPES - Displays 3x2 listing groups in 3 listing type categories: Offers (Donations), Trade Offers, and Requests.
// User can click "See More" to view a particular listing type category.
// User can click a listing to view it in detail.
// Note: This is the default page when user opens app (after registration/login).

// DATA
import pinkSkirtImg from './../../assets/img/pink-skirt.jpg';

export function ListsAllTypes() {
    return (
        <>

        {/* <!-- Place holder--> */}
        {/* <!-- <div className="place-holder box column top-bot-wrap"></div> --> */}
        {/* <!-- Offers (Donations) --> */}
        <div className="box column top-bot-wrap">
            {/* <!-- Offers heading + "See more" button --> */}
            <div className="box">
                <h1 className="left-item">Offers</h1>
                <a href="view-listings/filtered-results.html">
                    <button type="button" className="btn accent-button"><u>See more</u></button>
                </a>
            </div>

            {/* <!-- Offer listings grid --> */}
            <div className="grid by-3">
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
            </div>
        </div>

        {/* <!-- Trade Offers --> */}
        <div className="box column top-bot-wrap">
            {/* <!-- top-bot-wrap heading + "See more" button --> */}
            <div className="box">
                <h1 className="left-item">Trade Offers</h1>
                <a href="view-listings/filtered-results.html">
                    <button type="button" className="btn accent-button"><u>See more</u></button>
                </a>
            </div>

            {/* <!-- Request listings grid --> */}
            <div className="grid by-3">
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
            </div>
        </div>

        {/* <!-- Requests --> */}
        <div className="box column top-bot-wrap">
            {/* <!-- top-bot-wrap heading + "See more" button --> */}
            <div className="box">
                <h1 className="left-item">Requests</h1>
                <a href="view-listings/filtered-results.html">
                    <button type="button" className="btn accent-button"><u>See more</u></button>
                </a>
            </div>

            {/* <!-- Request listings grid --> */}
            <div className="grid by-3">
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
            </div>
        </div>
        {/* <!-- Place holder--> */}
        {/* <!-- <div className="place-holder-bottom"></div> --> */}

        </>
    )
}
// LISTINGS OF ALL TYPES - Displays 3x2 listing groups in 3 listing type categories: Offers (Donations), Trade Offers, and Requests.
// User can click "See More" to view a particular listing type category.
// User can click a listing to view it in detail.
// Note: This is the default page when user opens app (after registration/login).

// PACKAGES
import { NavLink } from 'react-router-dom';

// HELPERS
import NavList from './browsing.helpers/nav-list';

// DATA
import pinkSkirtImg from './../../assets/img/pink-skirt.jpg';
// const listingObj = {

// }
let altProp = "Black tank top, pink+purple skirt";
let classNProp = "grid-item";

// TODO: Display filters applied

export function ListsAllTypes() {
    return (
        <div className="side-wrap box column">
            {/* <!-- Offers (Donations) --> */}
            <ListingTypeSection sectionTitle="Offers"/>

            {/* <!-- Trade Offers --> */}
            <ListingTypeSection sectionTitle="Trade Offers"/>

            {/* <!-- Requests --> */}
            <ListingTypeSection sectionTitle="Reguests"/>
        </div>
    )
}

function ListingTypeSection(props) {
    let { sectionTitle } = props;
    // let { listingsObj } = props;
    // let { pinkShirtImg, altProp, classNProp } = listingsObj;

    return (
        <div className="box column top-bot-wrap">
            {/* <!-- Offers heading + "See more" button --> */}
            <SectionHeader sectionTitle={sectionTitle}/>

            {/* <!-- Offer listings grid --> */}
            <ListingGrid/>
        </div>
    )
}

// Listing Type Section Header
// Left-side: Title (ex: "Offers")
// Right-side: "See more" button --> see only that listing type
function SectionHeader(props) {
    let { sectionTitle } = props;
    return (
        <div className="box">
            {/* Section Title */}
            <h1 className="left-item">{sectionTitle}</h1>

            {/* See more button */}
            <NavLink to="lists-type-x">
                <button type="button" className="btn accent-button"><u>See more</u></button>
            </NavLink>
        </div>
    )
}

function ListingGrid(props) {
    let listingElemArr = [];

    for (let i = 0; i < 6; i++) {
        let listingElem = <ListingElem key={i}/>;

        listingElemArr.push(listingElem);
    }

    return (
        <div className="grid by-3">
            {listingElemArr}
        </div>
    )
}

function ListingElem(props) {
    return (
        <NavList src={pinkSkirtImg} navTo="list-details" alt={altProp} classN={classNProp}/>
    )
}
// LISTINGS OF TYPE X - Displays rows of 2 listings of one type (Donations, Trades, Requests).
// User can click "Filters" to edit search and filters.
// User can click a listing to view it in detail.

// DATA
import pinkSkirtImg from './../../assets/img/pink-skirt.jpg';
import pants from './../../assets/img/pants.jpg';
import docs from './../../assets/img/docs.png';
import boots from './../../assets/img/asos-boots.png';
import blackShirt from './../../assets/img/blackshirt.jpg';
import combra from './../../assets/img/combra.png';
import sweater from './../../assets/img/sweater.png';
import tallDress from './../../assets/img/tall-dress.png';
import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png';

// import title from './../browsing/lists-all-types';

// HELPERS
import NavList from './browsing.helpers/nav-list';

//Packages
import { NavLink } from 'react-router-dom';
// import { NavLink, useLocation } from 'react-router-dom';

// const listingObj = {

// }
let altProp = "Black tank top, pink+purple skirt";
let classNProp = "grid-item";

//array of items
// TODO: Add alt text
let listings = [ {pinkSkirtImg}, {pants}, {docs}, {boots}, {blackShirt}, {combra}, {sweater}, {tallDress} ];
// console.log(listings);

export function ListsTypeX() {
    // const location = useLocation();
    // const title = location.state;
    // console.log(location);

    const title = localStorage.getItem("sectionTitle");

    return (
        <div className="side-wrap box column">
            {/* <!-- Offers (Donations) --> */}
            <ListingTypeSection sectionTitle={title}/>
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
            {/* <ListingGrid listType={listings}/> */}
            <ListingGrid listings={listings}/>
        </div>
    )
}

// Listing Type Section Header
// Left-side: Title (ex: "Offers")
// Right-side: "See more" button --> see only that listing type
function SectionHeader(props) {
    let { sectionTitle } = props;
    let length = Object.values(listings).length;
    return (
        <div className="box fill-container">
            {/* back button */}
            <NavLink to='../lists-all-types'>
                <button type="button" className="btn arrow-btn p-0">
                    <img src={ArrowIcon} alt="return"/>
                </button>
            </NavLink>

            {/* Section Title */}
            <h1 className="left-item">{sectionTitle}</h1>
            <p>{ length } results</p>
        </div>
    )
}

function ListingGrid(props) {
   // let listType = props;
    // let listingElemArr = [];
    // console.log(props.listings);
    let listType = Object.values(props.listings);
    //console.log(listType);
    let listingElemArr = listType.map((elem) => {
        // console.log(Object.values(elem).at(0));

        // TODO: Add key
        return (
            <ListingElem item={Object.values(elem).at(0)} key={Object.values(elem).at(0)}/>
        )
    });

    return (
        <div className="grid by-2">
            {listingElemArr}
        </div>
    )
}

function ListingElem(props) {
    let item = props;
    // console.log(item);
    return (
        <NavList src={item.item} navTo='../list-details' alt={altProp} classN={classNProp}/>
    )
}
// LISTINGS OF ALL TYPES - Displays 3x2 listing groups in 3 listing type categories: Offers (Donations), Trade Offers, and Requests.
// User can click "See More" to view a particular listing type category.
// User can click a listing to view it in detail.
// Note: This is the default page when user opens app (after registration/login).

// PACKAGES
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

// HELPERS
import NavListing from './browsing.helpers/nav-listing';

// DATA
import pinkSkirtImg from './../../assets/img/pink-skirt.jpg';
import sweaterImg from './../../assets/img/sweater.png';
import bootsImg from './../../assets/img/asos-boots.png';

const listingArr = [
    {
        name: "Pink skirt",
        classN: "grid-item",
        alt: "Black tank top, pink+purple skirt",
        image: pinkSkirtImg
    },
    {
        "name": "Gingham Vest",
        "classN": "grid-item",
        "alt": "Black and white gingham sweater vest",
        "image": sweaterImg
    },
    {
        "name": "ASOS boots",
        "classN": "grid-item",
        "alt": "Black ASOS heeled boots",
        "image": bootsImg
    },
    {
        "name": "Compression bra",
        "classN": "grid-item",
        "alt": "Tan compression bra",
        "image": require('./../../assets/img/combra.png') // remove require if not working
    },
    {
        "name": "Docs",
        "classN": "grid-item",
        "alt": "Black Doc Martens loafers",
        "image": require('./../../assets/img/docs.png') // remove require if not working
    },
    {
        "name": "Dress",
        "classN": "grid-item",
        "alt": "Floral dress",
        "image": require('./../../assets/img/tall-dress.png') // remove require if not working
    },
]

// let altProp = "Black tank top, pink+purple skirt";
// let classNProp = "grid-item";

// TODO: Display filters applied

export function ListsAllTypes() {
    // Define a state variable that contains an object, where each prop is a listing. Initially empty object.
    const [listingsObj, setListingsObj] = useState({}); // TODO: only show results (currently shows 0 results from initial empty object before showing results from db)

    // Fetch listing data and set state of listingsObj
    useEffect(() => {
        const db = getDatabase();
        const listingDataRef = ref(db, "listingData"); // TODO: change to listingData

        //returns a function that will "unregister" (turn off) the listener
        const unregisterFunction = onValue(listingDataRef, (snapshot) => {
        const listingDataValue = snapshot.val();
        //...set state variable, etc...
        setListingsObj(listingDataValue);
        })

        //cleanup function for when component is removed
        function cleanup() {
        unregisterFunction(); //call the unregister function
        }
        return cleanup; //effect hook callback returns the cleanup function
    }, []) //empty array is the second argument to the `useEffect()` function.
    //It says to only run this effect on first render

    return (
        <div className="side-wrap box column">
            {/* <!-- Offers (Donations) --> */}
            <ListingTypeSection sectionTitle="Offers" listingArr={listingArr}/>

            {/* <!-- Trade Offers --> */}
            <ListingTypeSection sectionTitle="Trades" listingArr={listingArr}/>

            {/* <!-- Requests --> */}
            <ListingTypeSection sectionTitle="Requests" listingArr={listingArr}/>
        </div>
    )
}

function ListingTypeSection(props) {
    let { sectionTitle, listingArr } = props;
    // let { listingsObj } = props;
    // let { pinkShirtImg, altProp, classNProp } = listingsObj;

    return (
        <div className="box column top-bot-wrap">
            {/* <!-- Offers heading + "See more" button --> */}
            <SectionHeader sectionTitle={sectionTitle}/>

            {/* <!-- Offer listings grid --> */}
            <ListingGrid listingArr={listingArr}/>
        </div>
    )
}

// Listing Type Section Header
// Left-side: Title (ex: "Offers")
// Right-side: "See more" button --> see only that listing type
function SectionHeader(props) {
    let { sectionTitle } = props;
    sectionTitle = sectionTitle.toString();
    // let [title, setTitle] = useState('');

    return (
        <div className="box">
            {/* Section Title */}
            <h1 className="left-item">{sectionTitle}</h1>

            {/* See more button */}
            <NavLink to="../lists-type-x" onClick={() => localStorage.setItem("sectionTitle", sectionTitle )} >
                <button type="button" className="btn accent-button"><u>See more</u></button>
            </NavLink>
        </div>
    )
}

function ListingGrid(props) {
    let { listingArr } = props;
    let listingElemArr = [];

    // Loop through each item in array
    for (let i = 0; i < 6; i++) {
    
        let listingElem = <ListingElem key={i} listing={listingArr[i]}/>;
        listingElemArr.push(listingElem);
    }

    return (
        <div className="grid by-3">
            {listingElemArr}
        </div>
    )
}

function ListingElem(props) {
    let { listing } = props;
    return (
        <NavListing src={listing.image} navTo="../list-details" alt={listing.alt} classN={listing.classN}/>
    )
}
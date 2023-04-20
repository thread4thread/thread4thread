// LISTINGS OF TYPE X - Displays rows of 2 listings of one type (Donations, Trades, Requests).
// User can click "Filters" to edit search and filters.
// User can click a listing to view it in detail.

// PACKAGES
import { useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// DATA
import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png';

// HELPERS
import NavListing from './browsing.helpers/nav-listing';

export function ListsTypeX() {
    // Define a state variable that contains an object, where each prop is a listing. Initially empty object.
    const [listingsObj, setListingsObj] = useState({});

    // Fetch listing data and set state of listingsObj
    useEffect(() => {
        const db = getDatabase();
        const listingDataRef = ref(db, "test"); // TODO: change to listingData

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

    const title = localStorage.getItem("sectionTitle");

    return (
        <div className="side-wrap box column">
            {/* <!-- Offers (Donations) --> */}
            <ListingTypeSection sectionTitle={title} listingsObj={listingsObj}/>
        </div>
    )
}

function ListingTypeSection(props) {
    let { sectionTitle, listingsObj } = props;
    let listingKeyArr = Object.keys(listingsObj);
    let nListings = listingKeyArr.length;

    return (
        <div className="box column top-bot-wrap">
            {/* <!-- Offers heading + "See more" button --> */}
            <SectionHeader sectionTitle={sectionTitle} nListings={nListings}/>

            {/* <!-- Offer listings grid --> */}
            <ListingGrid listingsObj={listingsObj} listingKeyArr={listingKeyArr}/>
        </div>
    )
}

// Listing Type Section Header
// Left-side: Title (ex: "Offers")
// Right-side: "See more" button --> see only that listing type
function SectionHeader(props) {
    let { sectionTitle, nListings } = props;
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
            <p>{ nListings } results</p>
        </div>
    )
}

function ListingGrid(props) {
    let { listingsObj, listingKeyArr } = props;

    let listingElemArr = listingKeyArr.map((listingKey) => {
        console.log(listingsObj[listingKey]["filePath"]);

        let listingObj = listingsObj[listingKey];
        return (
            <ListingElem listing={listingObj} key={listingKey}/>
        )
    });

    return (
        <div className="grid by-2">
            {listingElemArr}
        </div>
    )
}

function ListingElem(props) {
    let { listing } = props;
    return (
        <NavLink to='../list-details'>
            <img src={listing.filePath} alt={listing.altProp} className="grid-item"/>
        </NavLink>
    )
}
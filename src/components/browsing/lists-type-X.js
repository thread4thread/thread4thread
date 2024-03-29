// LISTINGS OF TYPE X - Displays rows of 2 listings of one type (Donations, Trades, Requests).
// User can click "Filters" to edit search and filters.
// User can click a listing to view it in detail.

// PACKAGES
import { useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useList } from 'react-firebase-hooks/database'
import { db } from '../account/f-config';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// DATA
import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png';

// HELPERS
import { ListingGrid } from './browsing.helpers/listing-grid';

export function ListsTypeX() {
    // Define a state variable that contains an object, where each prop is a listing. Initially empty object.
    const [listingsObj, setListingsObj] = useState({}); // TODO: only show results (currently shows 0 results from initial empty object before showing results from db)

    // Fetch listing data and set state of listingsObj
    useEffect(() => {
        // const db = getDatabase();
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

    let items = [];
    let sectionTitleRef = sectionTitle.toUpperCase();

    listingsObj = Object.entries(listingsObj);

    listingsObj.map((list) => {
        
        list = list[1];
        let type = list.exchangeType.toUpperCase() + "S";
        if(type === sectionTitleRef) {
            items.push(list);     
        }
    })

    let nListings = items.length;

    return (
        <div className="box column top-bot-wrap">
            {/* <!-- Offers heading + "See more" button --> */}
            <SectionHeader sectionTitle={sectionTitle} nListings={nListings}/>

            {/* <!-- Offer listings grid --> */}
            <ListingGrid listingsObj={items} nCols={2}/>
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
            <NavLink to='../'>
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
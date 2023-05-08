// LISTINGS OF ALL TYPES - Displays 3x2 listing groups in 3 listing type categories: Offers (Donations), Trade Offers, and Requests.
// User can click "See More" to view a particular listing type category.
// User can click a listing to view it in detail.
// Note: This is the default page when user opens app (after registration/login).

// PACKAGES
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

// HELPERS
import { ListingGrid } from './browsing.helpers/listing-grid';

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

        console.log(listingDataValue);
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
            <ListingTypeSection sectionTitle="Offers" listingsObj={listingsObj}/>

            {/* <!-- Trade Offers --> */}
            <ListingTypeSection sectionTitle="Trades" listingsObj={listingsObj}/>

            {/* <!-- Requests --> */}
            <ListingTypeSection sectionTitle="Requests" listingsObj={listingsObj}/>
        </div>
    )
}

function ListingTypeSection(props) {
    let { sectionTitle, listingsObj } = props;


    return (
        <div className="box column top-bot-wrap">
            {/* <!-- Offers heading + "See more" button --> */}
            <SectionHeader sectionTitle={sectionTitle}/>

            {/* <!-- Offer listings grid --> */}
            <ListingGrid listingsObj={listingsObj} nCols={3} max={6}/>
        </div>
    )
}

// Listing Type Section Header
// Left-side: Title (ex: "Offers")
// Right-side: "See more" button --> see only that listing type


function SectionHeader(props) {
    let { sectionTitle } = props;
    sectionTitle = sectionTitle.toString();

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
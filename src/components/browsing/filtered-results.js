// LISTINGS OF TYPE X - Displays rows of 2 listings of one type (Donations, Trades, Requests).
// User can click "Filters" to edit search and filters.
// User can click a listing to view it in detail.

// PACKAGES
import { useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../account/f-config';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// DATA
import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png';

// HELPERS
import { ListingGrid } from './browsing.helpers/listing-grid';
import { type } from '@testing-library/user-event/dist/type';
import NoResults from './no-results';

export function FilteredResults(props) {
    // Define a state variable that contains an object, where each prop is a listing. Initially empty object.
    let location = useLocation();
    let filters = location.state.filters;
    console.log(filters);
    // console.log(location.state.filters);

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

    const title = 'Results';

    console.log(filters.appearance);

    let filteredResults = Object.entries(listingsObj);

  
    function filterMatchingFn(filterParam, filterFn) {
        let params = filters[filterParam];
        // console.log(params);
        let finalR = [];
        if(params != null) {
            params.map((param) => {

                console.log(param);
                filteredResults = filteredResults.filter(filterFn);
            })        
        }
    }
    // let finalR = [];

    // function filterMatchingFn(filterParam, filterFn) {
    //     let params = filters[filterParam];
    //     // console.log(params);
    //     if(params != null) {
    //         params.map((param) => {
    //             let filteredResults = Object.entries(listingsObj);
    //             filteredResults = filteredResults.filter(filterFn);
    //             finalR = [...finalR, filteredResults];
    //         })        
    //     }
    //     console.log(finalR);


    // function filterMatchingFn(filterParam, filterFn) {
    //     //console.log(filters[filterParam]);
    //     if (filters[filterParam] !== null) {
    //         if(filters[filterParam].length() > 1) {
    //             filters[filterFn].map((filter) => {
    //                 filterMatchingFn(filter, filterFn);
    //             })
    //         } else {
    //             filteredResults = filteredResults.filter(filterFn);
    //         }
    //         console.log(filters[filterParam]);
    //         console.log(filteredResults);
    //     }
    // }

   
    filterMatchingFn('exchangeType', (item) => item[1].exchangeType == filters.exchangeType);

    filterMatchingFn('type', (item) => item[1].type == filters.type);

    filterMatchingFn('appearance', (item) => item[1].appearance == filters.appearance[0]);

    filterMatchingFn('color', (item) => item[1].color == filters.color[0]);

    filterMatchingFn('condition', (item) => item[1].condition == filters.condition);

    //filterMatchingFn('brand', (item) => item[1].brand == filters.brand);

    let finalResults = [];
    
    filteredResults.map((result) => {
        finalResults.push(result[1]);
    })

    return (
        <div className="side-wrap box column">
            {/* <!-- Offers (Donations) --> */}
            <ListingTypeSection sectionTitle={title} listingsObj={finalResults}/>
        </div>
    )
    }

function ListingTypeSection(props) {
    let { sectionTitle, listingsObj } = props;
    
    let nListings = listingsObj.length;

    return (
        <div className="box column top-bot-wrap">
            {/* <!-- Offers heading + "See more" button --> */}
            <SectionHeader sectionTitle={sectionTitle} nListings={nListings}/>

            {/* <!-- Offer listings grid --> */}
            <ListingGrid listingsObj={listingsObj} nCols={2}/>
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

// export function ResultsGrid(props) {
//     let { listingsObj, nCols, max } = props;
//     let listingKeyArr = Object.keys(listingsObj);
//     // console.log(listingsObj);
//     // Apply a limit to number of listings displayed if optional max parameter included
//     if (max != null) {
//         listingKeyArr = listingKeyArr.slice(0, max);
//     };

//     console.log(listingsObj);

//     let listingElemArr = listingsObj.map((list) => {
//         // console.log(list.filePath);
//         list = list[1];
//         let listingKey = list.itemID;
//         //let listingObj = 'cvadfvad';
//         let filePath = list.filePath;
//         let alt = list.title;
//         let title = list.title;
//         //console.log("nav listing");
//         return (
//             <NavListing navTo="../list-details" src={filePath} alt={alt} item={listingKey} title={title} key={listingKey}/>
//         )
//     });

//     return (
//         <div className={"grid by-" + nCols}>
//             {listingElemArr}
//         </div>
//     )

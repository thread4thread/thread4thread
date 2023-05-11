// LISTING REVIEW - Displays user's listings (posts), in order of recency starting with most recent, where the completed
// exchange listings are grayed out and at the bottom. Also displays user's reviews from other people on their 
// completed exchanges.

// PACKAGES
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

// HELPERS
import { ListingGrid } from '../browsing/browsing.helpers/listing-grid';
import { db } from '../account/f-config';

// DATA
import pinkSkirt from '../../assets/img/pink-skirt.jpg';

// TODO: Set up ListingGrid to make listings dynamic
// TODO: Add subcomps
// TODO: Add Reviews page

export function ListingReview(props) {

  let { user } = props;
  let userID = user.uid;

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

    let listingsObjArray = Object.entries(listingsObj);

    let listings = [];

    listingsObjArray.map((list) => {
        list = list[1];
        let user = list.uid;
        if(user === userID) {
            listings.push(list);     
        }
    })

  return (
    <div className="box column">
      {/* <!-- Header --> */}
      <div className="box column">
          {/* <!-- Headings --> */}
          <div className="box text-center">
              <h1 className="no-space mx-auto display-4 fs-2">Listings</h1>
              <h1 className="no-space mx-auto display-4 fs-2"><a href="../profile/own-profile-reviews.html" className="link">Reviews</a></h1>
          </div>

          {/* <!-- Rectangles --> */}
          <div className="container">
              <div className="row">
                  <div style={{backgroundColor:"#8991DC", height: "5px", width: "49%"}} className="no-space mr-auto"> </div>
                  <div style={{backgroundColor:"white", height: "5px", width: "49%"}} className="no-space mr-auto"> </div>
              </div>
          </div>
      </div>

      {/* // <!-- Listings --> */}
      {/* <ListingGrid listingsObj={items} nCols={3} max={6}/> */}

      <div className="top-bot-wrap">
          {/* <a href="listing-details.html"><img src={pinkSkirt} alt="Black tank top, pink+purple skirt" className="grid-item"/></a>
          <a href="listing-details.html"><img src={pinkSkirt} alt="Black tank top, pink+purple skirt" className="grid-item"/></a>
          <a href="listing-details.html"><img src={pinkSkirt} alt="Black tank top, pink+purple skirt" className="grid-item"/></a>
          <a href="listing-details.html"><img src={pinkSkirt} alt="Black tank top, pink+purple skirt" className="grid-item"/></a>
          <a href="listing-details.html"><img src={pinkSkirt} alt="Black tank top, pink+purple skirt" className="grid-item"/></a> */}
         <ListingGrid listingsObj={listings} nCols={3} max={6}/>
      </div>
      {/* <ListingGrid listingsObj={listingsObj} cols={3}/> */}
    </div>
  )
}
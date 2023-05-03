// LISTING REVIEW - Displays user's listings (posts), in order of recency starting with most recent, where the completed
// exchange listings are grayed out and at the bottom. Also displays user's reviews from other people on their 
// completed exchanges.

// PACKAGES
import React from 'react';

// HELPERS
import { ListingGrid } from '../browsing/browsing.helpers/listing-grid';

// DATA
import pinkSkirt from '../../assets/img/pink-skirt.jpg';
// let listingsObj = {}

// TODO: Set up ListingGrid to make listings dynamic
// TODO: Add subcomps
// TODO: Add Reviews page

export function ListingReview(props) {
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
      <div className="grid by-3">
          <a href="listing-details.html"><img src={pinkSkirt} alt="Black tank top, pink+purple skirt" className="grid-item"/></a>
          <a href="listing-details.html"><img src={pinkSkirt} alt="Black tank top, pink+purple skirt" className="grid-item"/></a>
          <a href="listing-details.html"><img src={pinkSkirt} alt="Black tank top, pink+purple skirt" className="grid-item"/></a>
          <a href="listing-details.html"><img src={pinkSkirt} alt="Black tank top, pink+purple skirt" className="grid-item"/></a>
          <a href="listing-details.html"><img src={pinkSkirt} alt="Black tank top, pink+purple skirt" className="grid-item"/></a>
      </div>
      {/* <ListingGrid listingsObj={listingsObj} cols={3}/> */}
    </div>
  )
}
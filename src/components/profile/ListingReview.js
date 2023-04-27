import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export function ListingReview(props) {

  return (
    <div className="box column ">
      <div className="box text-center">
        {/* <h1 className="no-space mx-auto display-4 fs-2">Listings</h1>
        <h1 className="no-space mx-auto display-4 fs-2"><a href="../profile/own-profile-reviews.html" className="link">Reviews</a></h1>
 */}
        <ul className="nav nav-underline">
          <li className="nav-item no-space mx-auto display-4 fs-2">
            <h1 className="no-space mx-auto display-4 fs-2">
              <Link to='/my-profile/listings'>Listings</Link>
            </h1>
          </li>
          <li className="nav-item no-space mx-auto display-4 fs-2">
            <h1 className="no-space mx-auto display-4 fs-2">
              <Link to='/my-profile/listings'>Reviews</Link>
            </h1>
          </li>
        </ul>
      </div>

      {/* <Route path='/my-profile/listings' element={<UserProfile/>} />
      <Route path='/my-profile/reviews' element={<UserProfile/>} /> */}

    </div>
  )
}
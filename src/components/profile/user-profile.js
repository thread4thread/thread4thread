// USER PROFILE - Displays a user's profile, including the User Metrics, User Info, and a "Listings" panel
// which can be switched to a "Reviews" panel by swiping the screen.

// TODO: Make dynamic with user data

// TODO: Add alt text

// PACKAGES
import React from 'react';

// HELPERS
import { UserMetrics } from './UserMetrics';
import { UserInfo } from './UserInfo';
import { ListingReview } from './ListingReview';

// DATA
import pfp from '../../assets/img/blank-pfp.png';

export function UserProfile(props) {

  return (
    <div className="box column">
      <UserMetrics pfp={pfp}/>
      <UserInfo />
      <ListingReview />
    </div>
  )
}
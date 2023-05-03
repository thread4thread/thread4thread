// USER PROFILE - Displays a user's profile, including the User Metrics, User Info, and a "Listings" panel
// which can be switched to a "Reviews" panel by swiping the screen.

// TODO: Make dynamic with user data

// TODO: Add alt text

// PACKAGES
import React from 'react';

// SUBCOMPONENTS
import { UserMetrics } from './UserMetrics';
import { UserInfo } from './UserInfo';
import { ListingReview } from './ListingReview';

// DATA
import pfp from '../../assets/img/blank-pfp.png';

export function UserProfile(props) {

  console.log(props.user);

  return (
    <div className="box column side-wrap">
      <UserMetrics pfp={pfp}/>
      <UserInfo name="Name" pronouns="pronouns" user="username"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      <ListingReview />
    </div>
  )
}
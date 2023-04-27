import React from 'react';
import { UserMetrics } from './UserMetrics';
import { UserInfo } from './UserInfo';
import { ListingReview } from './ListingReview';

export function UserProfile(props) {

  return (
    <div className="box column">
      <UserMetrics />
      <UserInfo />
      <ListingReview />
    </div>
  )
}
// USER PROFILE - Displays a user's profile, including the User Metrics, User Info, and a "Listings" panel
// which can be switched to a "Reviews" panel by swiping the screen.

// TODO: Make dynamic with user data

// TODO: Add alt text

// PACKAGES
import React, {useState} from 'react';
import EditProfile from './EditProfile';

// SUBCOMPONENTS
import { UserMetrics } from './UserMetrics';
import { UserInfo } from './UserInfo';
import { ListingReview } from './ListingReview';

// DATA
import pfp from '../../assets/img/blank-pfp.png';



  /*function Modes() { 
    editMode ? (
    <div>
      <EditProfile changeToFalse={changeToFalse} />
      </div>
  )} */

export function UserProfile(props) {
  // console.log(props);
  let user = props.user;
  // console.log(user.displayName);
  let cutOffMail = user.email.indexOf("@");
  let username = user.email.slice(0, cutOffMail);
  console.log(user);
  /*const [editMode, setEditMode] = useState(false);

  const changeToFalse = () => {
    setEditMode(false);
  }*/
  


  return (
    <div className="box column side-wrap">
      <div className='outerBox m10'>

      </div>
      <UserMetrics pfp={user.photoURL}/>
      <UserInfo name={user.displayName} pronouns={localStorage.getItem('pronouns')} user={username}
        bio={localStorage.getItem('bio')} />
      <ListingReview user={user} />
    </div>
  )
}
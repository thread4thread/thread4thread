// USER METRICS - Includes user's profile picture, scores, rating, and an edit profile button.
// Inputs:
  // pfp - An image for the user's profile

// TODO: Break into subcomponents

// PACKAGES
import {React} from 'react';
import { NavLink } from 'react-router-dom';


// ICONS
import editIcon from '../../assets/icon/edit.png';
import starIcon from '../../assets/icon/star.png';

export function UserMetrics(props) {
  let { pfp } = props;

  return (
    <div className="box text-center">
      <img src={pfp} className="pfp w-25 h-25 no-space" />

      <div className="tight-box column">
        <div className="box text-center">
          <div className="no-space">
            <p className="fs-4 fw-bold mb-0">0</p>
            <p className="fs-6 fw-regular">Donated</p>
          </div>

          <div className="no-space">
            <p className="fs-4 fw-bold mb-0">0</p>
            <p className="fs-6 fw-regular">Received</p>
          </div>

          <div className="no-space">
            <p className="fs-4 fw-bold mb-0">0</p>
            <p className="fs-6 fw-regular">Listings</p>
          </div>

          <div className="box ms-1 ps-1">
            <div className="edit-icon">
              {/* <NavLink to="/edit-profile"> */}
                {/* <img src={editIcon} height="20px" alt="Edit profile" /> */}
              {/* </NavLink> */}
              <NavLink to='/edit-profile'>
                <img src={editIcon} height="20px" alt="Edit profile" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="box text-center">
          <img src={starIcon} alt="star" height="20px" />
          <img src={starIcon} alt="star" height="20px" />
          <img src={starIcon} alt="star" height="20px" />
          <img src={starIcon} alt="star" height="20px" />
          <img src={starIcon} alt="star" height="20px" />
        </div>
      </div>
    </div>
  )
}
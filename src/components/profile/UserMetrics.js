import React from 'react';

export function UserMetrics(props) {

  return (
    <div className="box text-center">
      <img src="../../assets/img/blank-pfp.png" className="w-25 h-25 no-space" />

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
              <a href="../profile/edit-profile.html">
                <img src="../img/edit.png" height="20px" alt="Edit profile" />
              </a>
            </div>
          </div>
        </div>

        <div className="box text-center">
          <img src="../img/star.png" height="20px" />
          <img src="../img/star.png" height="20px" />
          <img src="../img/star.png" height="20px" />
          <img src="../img/star.png" height="20px" />
          <img src="../img/star.png" height="20px" />
        </div>
      </div>
    </div>
  )
}
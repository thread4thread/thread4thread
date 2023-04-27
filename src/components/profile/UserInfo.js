import React from 'react';

export function UserInfo(props) {

  return (
    <div className="tight-box column">
      <div className="box text-center">
        <p className="fs-4 fw-bold align-middle mb-0">Name</p>
        <p className="fs-4 fw-light align-middle text-secondary mb-0">pronouns</p>
      </div>

      <p className="fs-5 fw-light mb-0">@username</p>

      <br />

      <p className="fw-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  )
}
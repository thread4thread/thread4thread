// USER INFORMATION - Displays user's name, pronouns, user handle, and bio.
// Inputs:
  // name - User's name
  // pronouns - User's pronouns
  // user - User's handle/username
  // bio - User's bio/description

// PACKAGES
import React from 'react';

// TODO: Break into subcomps

export function UserInfo(props) {
  const { name, pronouns, user, bio } = props;

  return (
    <div className="tight-box column side-wrap">
      <div className="box text-center">
        <p className="fs-4 fw-bold align-middle mb-0">{name}</p>
        <p className="fs-4 fw-light align-middle text-secondary mb-0">{pronouns}</p>
      </div>

      <p className="fs-5 fw-light mb-0">@{user}</p>

      <br />

      <p className="fw-light">{bio}</p>
    </div>
  )
}
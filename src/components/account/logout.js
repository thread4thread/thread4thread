
// code for logout 
import React from "react";

import { signOut, getAuth } from "firebase/auth";

import { useState } from "react";
import { auth } from "./f-config";
import { Link } from 'react-router-dom';


import {
    MDBContainer,
    MDBCollapse,
    MDBNavbar,
    MDBNavbarToggler,
    MDBIcon,
    MDBBtn,
  } from 'mdb-react-ui-kit';
import { NavLink } from "react-router-dom";
import { Welcome } from "./welcome";
import { ListsAllTypes } from "../browsing/lists-all-types";
  
  export function HamburgerMenu(props) {

    const logout = async () => {
        await signOut(auth);
      };

    //   const showLogOutModal = () => {
    //     props.setShowLogOut(true);
    // }

    const [showNavExternal3, setShowNavExternal3] = useState(false);
  
    return (
      <>
        <MDBNavbar>
          <MDBContainer fluid>
            <MDBNavbarToggler
              className='ms-auto'
              type='button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNavExternal3(!showNavExternal3)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>
  
        <MDBCollapse show={showNavExternal3}>
          <div className='bg-light shadow-3 p-4'>
            <Link to="/welcome">
            <MDBBtn block className='border-bottom m-0' color='link' onClick={logout}>
              Log Out 
            </MDBBtn>
            </Link>
          </div>
        </MDBCollapse>
      </>
    );
  }






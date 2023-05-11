
// code for logout 
import React from "react";

import { signOut, getAuth } from "firebase/auth";

import { useState } from "react";
import { auth } from "./f-config";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import logoutBTN from '../../assets/icon/logout.png';
>>>>>>> 55ab8aaaff2e89b51f492ad34569fb74a2d7ce1c


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

    // MDBIcon = logout;

    const logout = async () => {
        await signOut(auth);
        return <Welcome/>
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
              {/* <MDBIcon fas icon='bars' /> */}
              <div className="col bottom-nav-icon">
                <div className="row top-nav">
                  <img src={logoutBTN} alt='logout'/>
                </div>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>
  
        <MDBCollapse show={showNavExternal3}>
<<<<<<< HEAD
          <div className='bg-light shadow-3 p-4'>
            <Link to="/welcome">
            <MDBBtn block className='border-bottom m-0' color='link' onClick={logout}>
=======
          <div className='p-2'>
            <MDBBtn className='m-0' color='#8991DC' onClick={logout}>
>>>>>>> 55ab8aaaff2e89b51f492ad34569fb74a2d7ce1c
              Log Out 
            </MDBBtn>
            </Link>
          </div>
        </MDBCollapse>
      </>
    );
  }






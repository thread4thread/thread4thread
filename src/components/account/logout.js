
// code for logout 
import React from "react";

import { signOut, getAuth } from "firebase/auth";

import { useState } from "react";
import { auth } from "./f-config";
import { Link } from 'react-router-dom';
import logoutBTN from '../../assets/icon/enter.png';


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
import { Button } from "@mui/material";
  
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
              {/* <MDBIcon fas icon='bars' /> */}
               <div className="col bottom-nav-icon">
                <div className="row top-nav">
                  <Button onClick={logout}>  
                    <img src={logoutBTN} alt='logout'/>
                  </Button>
                  <p className="logout">Logout</p>
                </div>
              </div>
      </>
    );
  }






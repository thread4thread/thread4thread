// PACKAGES
// import React, { useState, useEffect } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// COMPONENTS

// DATA
import pinkSkirtImg from './assets/img/pink-skirt.jpg';

function App() {
  return (
    <>

    {/* <!-- Page Content --> */}
    <main className="side-wrap box column">

        {/* <!-- Place holder--> */}
        {/* <!-- <div className="place-holder box column top-bot-wrap"></div> --> */}
        {/* <!-- Offers (Donations) --> */}
        <div className="box column top-bot-wrap">
            {/* <!-- Offers heading + "See more" button --> */}
            <div className="box">
                <h1 className="left-item">Offers</h1>
                <a href="view-listings/filtered-results.html">
                    <button type="button" className="btn accent-button"><u>See more</u></button>
                </a>
            </div>

            {/* <!-- Offer listings grid --> */}
            <div className="grid by-3">
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
            </div>
        </div>

        {/* <!-- Trade Offers --> */}
        <div className="box column top-bot-wrap">
            {/* <!-- top-bot-wrap heading + "See more" button --> */}
            <div className="box">
                <h1 className="left-item">Trade Offers</h1>
                <a href="view-listings/filtered-results.html">
                    <button type="button" className="btn accent-button"><u>See more</u></button>
                </a>
            </div>

            {/* <!-- Request listings grid --> */}
            <div className="grid by-3">
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
            </div>
        </div>

        {/* <!-- Requests --> */}
        <div className="box column top-bot-wrap">
            {/* <!-- top-bot-wrap heading + "See more" button --> */}
            <div className="box">
                <h1 className="left-item">Requests</h1>
                <a href="view-listings/filtered-results.html">
                    <button type="button" className="btn accent-button"><u>See more</u></button>
                </a>
            </div>

            {/* <!-- Request listings grid --> */}
            <div className="grid by-3">
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
                <a href="view-listings/listing-details.html"><img src={pinkSkirtImg} alt="Black tank top, pink+purple skirt" className="grid-item" /></a>
            </div>
        </div>
        {/* <!-- Place holder--> */}
        {/* <!-- <div className="place-holder-bottom"></div> --> */}
    </main>

    </>
  );
}

export default App;

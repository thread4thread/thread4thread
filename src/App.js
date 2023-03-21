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
        {/* Index */}
        <div className="hide">
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
        </div>

        {/* Search Filter */}
        <div>
        {/* <!-- Browse by... --> */}
        <h1 className="no-space">Browse by...</h1>

        {/* <!-- Clothing Type --> */}
        <div className="box column top-bot-wrap">
            {/* <!-- Characteristic name --> */}
            <h2 className="no-space">Clothing Type</h2>

            {/* <!-- Characteristics --> */}
            <div className="box">
                <button type="button"
                 className="btn btn-select">Tops</button>
                <button type="button"
                 className="btn btn-unselect">Bottoms</button>
                <button type="button"
                 className="btn btn-unselect">Underwear</button>
                <button type="button" 
                className="btn btn-unselect">Outerwear</button>
                <button type="button" 
                className="btn btn-unselect">Shoes</button>
                <button type="button" 
                className="btn btn-unselect">Gender-Affirming Items</button>
            </div>
        </div>

        {/* <!-- Size --> */}
        <div className="box column top-bot-wrap">
            <div className="box">
                {/* <!-- Characteristic name --> */}
                <h2 className="char-name left-item">Size (inches)</h2>
                {/* <!-- TODO: Add Size Guide page --> */}
                <button type="button"
                 className="btn accent-button right-item">
                 <u>Size Guide</u> 
                </button>
            </div>

            {/* <!-- Characteristics --> */}
            <div className="box">
                {/* <!-- Bust --> */}
                <div className="size-box column">
                    <label htmlFor="filter-bust">Bust:</label>
                    <input type="number" className="form-control size-input" id="filter-bust"/>
                </div>

                {/* <!-- Waist --> */}
                <div className="size-box column">
                    <label htmlFor="filter-waist">Waist:</label>
                    <input type="number" className="form-control size-input" id="filter-waist"/>
                </div>

                {/* <!-- Hips --> */}
                <div className="size-box column">
                    <label htmlFor="filter-hips">Hips:</label>
                    <input type="number" className="form-control size-input" id="filter-hips"/>
                </div>
            </div>
        </div>

        {/* <!-- Style --> */}
        <div className="box column top-bot-wrap">
            {/* <!-- Characteristic name --> */}
            <h2 className="category-heading">Style</h2>

            {/* <!-- Characteristics --> */}
            <div className="box">
                <button type="button"
                 className="btn btn-unselect">Feminine</button>
                <button type="button" 
                className="btn btn-unselect">Androgynous</button>
                <button type="button" 
                className="btn btn-unselect">Masculine</button>
            </div>
        </div>

        {/* <!-- Color --> */}
        <div className="box column top-bot-wrap">
            {/* <!-- Characteristic name --> */}
            <h2 className="no-space">Color</h2>

            {/* <!-- Characteristics --> */}
            <div className="box">
                <button type="button" className="btn btn-unselect">Pink</button>
                <button type="button" className="btn btn-unselect">Red</button>
                <button type="button" className="btn btn-unselect">Orange</button>
                <button type="button" className="btn btn-unselect">Yellow</button>
                <button type="button" className="btn btn-unselect">Green</button>
                <button type="button" className="btn btn-unselect">Blue</button>
                <button type="button" className="btn btn-unselect">Purple</button>
                <button type="button" className="btn btn-unselect">Black</button>
                <button type="button" className="btn btn-unselect">White</button>
                <button type="button" className="btn btn-unselect">Brown</button>
                <button type="button" className="btn btn-unselect">Beige</button>
                <button type="button" className="btn btn-unselect">Gray</button>
            </div>
        </div>

        {/* <!-- Condition --> */}
        <div className="box column top-bot-wrap">
            {/* <!-- Characteristic name --> */}
            <h2 className="category-heading">Condition</h2>

            {/* <!-- Characteristics --> */}
            <div className="box">
                <button type="button" className="btn btn-unselect">New</button>
                <button type="button" className="btn btn-unselect">Excellent</button>
                <button type="button" className="btn btn-unselect">Good</button>
                <button type="button" className="btn btn-unselect">Fair</button>
            </div>
        </div>

        {/* <!-- Brand --> */}
        <div className="box column top-bot-wrap">
            {/* <!-- Characteristic name --> */}
            <h2 className="category-heading">Brand</h2>

            {/* <!-- Characteristics --> */}
            <div className="box">
                <button type="button" className="btn btn-unselect">gc2b</button>
                <button type="button" className="btn btn-unselect">TomboyX</button>
                <button type="button" className="btn btn-unselect">H&M</button>
                <button type="button" className="btn btn-unselect">UNIQLO</button>
                <button type="button" className="btn btn-unselect">Old Navy</button>
            </div>
        </div>

        {/* <!-- Apply button --> */}
        <a href="filtered-results.html">
            <button type="button" className="btn btn-save">Apply</button>
        </a>
        {/* <!-- Invisible placeholder to add extra space at bottom --> */}
        <button type="button" className="btn invisible">Apply</button>
        </div>
    </main>

    </>
  );
}

export default App;

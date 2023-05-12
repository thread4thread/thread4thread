// SEARCH AND FILTER - Displays search bar and several filters: Clothing Type, Size, Style, Color, Condition, Brand.
// User can type in the search bar to search for listings by text (searches title and description).
// User can select the category buttons to filter listings by category.
// User can click the apply button to view listings of all types with the search and filter(s) applied.

// PACKAGES
// import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// DATA
// import backIcon from './../../assets/icon/keyboard-arrow-return.png';
import { FilterSection } from './FilterSection';

// TODO: Make data dynamic so that we can easily update
export function SearchFilter() {

    return (
        <>
        {/* Navbar */}
        {/* <SearchFilterNav/> */}

        {/* Main content */}
        <div className="side-wrap box column">
            {/* Header */}
            {/* <h1 className="no-space">Browse by...</h1> */}

            {/* Filter Sections (Clothing Type, Style, etc.) */}
            <FilterSection />

            {/* <!-- TODO: Size --> */}
            {/* <SizeFilterSection/> */}

            {/* <!-- Apply button --> */}
            {/* <ApplyButton/> */}

            </div>
        </>
    )
}

// SearchFilterNav creates the nav bar for this particular page, including a
// back arrow to go back to the last page and a search input field.
// function SearchFilterNav() {
//     return (
//         <div className="content-wrap topnav navbar navbar-expand-lg side-wrap">
//             <div className="container-fluid nav-container">
//             <NavLink to="/">
//             <button type="button" className="fil-search btn arrow-btn">
//                 <img src={backIcon} alt="return"/>
//             </button>
//         </NavLink>
//                 <form className="d-flex input-group fil-search search-bar" role="search">
//                     <input type="search"
//                     className="form-control search"
//                     placeholder="Search" aria-label="Search"/>
//                 </form>
//             </div>
//         </div>


//     )
// }

// TODO: Size
// function SizeFilterSection(props) {
//     return (
//         <div className="box column top-bot-wrap">
//         <div className="box">
//             {/* <!-- Characteristic name --> */}
//             <h2 className="char-name left-item">Size (inches)</h2>
//             {/* <!-- TODO: Add Size Guide page --> */}
//             <button type="button"
//             className="btn accent-button right-item">
//             <u>Size Guide</u>
//             </button>
//         </div>

//         {/* <!-- Characteristics --> */}
//         <div className="box">
//             {/* <!-- Bust --> */}
//             <SizeFilterField sizeName="Bust"/>

//             {/* <!-- Waist --> */}
//             <SizeFilterField sizeName="Waist"/>

//             {/* <!-- Hips --> */}
//             <SizeFilterField sizeName="Hips"/>
//         </div>
//     </div>
//     )
// }

// function SizeFilterField(props) {
//     let { sizeName } = props;
//     let fieldId = "filter-" + sizeName;

//     return (
//         <div className="size-box column">
//         <label htmlFor={fieldId}>{sizeName}:</label>
//         <input type="number" className="form-control size-input" id={fieldId}/>
//     </div>
//     )
// }

function ApplyButton() {
    return (
        <>
            <NavLink to="/results">
            <button type="button" className="btn btn-save side-wrap list-btn">Apply</button>
            {/* <!-- Invisible placeholder to add extra space at bottom --> */}
            <button type="button" className="btn invisible list-btn">Apply</button>
            </NavLink>
        </>
    )
}
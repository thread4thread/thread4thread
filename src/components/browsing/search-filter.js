// SEARCH AND FILTER - Displays search bar and several filters: Clothing Type, Size, Style, Color, Condition, Brand.
// User can type in the search bar to search for listings by text (searches title and description).
// User can select the category buttons to filter listings by category.
// User can click the apply button to view listings of all types with the search and filter(s) applied.

// PACKAGES
import { NavLink } from 'react-router-dom';

// DATA
import backIcon from './../../assets/icon/keyboard-arrow-return.png';
let clothingTypeCharsObj = {
    charTypeName: "Clothing Type",
    charsArr: [{ charName: "Tops", selectState: "select" },
        {charName: "Bottoms", selectState: "unselect"},
        {charName: "Outerwear", selectState: "unselect"},
        {charName: "Shoes", selectState: "unselect"},
        {charName: "Accessories", selectState: "unselect"},
        {charName: "Gender-Affirming Items", selectState: "unselect"}
    ]
}

// TODO: Make data dynamic so that we can easily update 
export function SearchFilter() {
    return (
        <>
        {/* Navbar */}
        <SearchFilterNav/>

        {/* Main content */}
        <div className="side-wrap box column">
            {/* <!-- Browse by... --> */}
            <h1 className="no-space">Browse by...</h1>

            {/* <!-- Clothing Type --> */}
            <FilterSection CharName="Clothing Type" charsObj={clothingTypeCharsObj}/>

            {/* <!-- TODO: Size --> */}
            {/* <SizeFilterSection/> */}

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
            <ApplyButton/>

            </div>
        </>
    )
}

// SearchFilterNav creates the nav bar for this particular page, including a
// back arrow to go back to the last page and a search input field.
function SearchFilterNav() {
    return (
        <div className="content-wrap topnav navbar navbar-expand-lg side-wrap">
            <div className="container-fluid nav-container">
            <NavLink to="/">
            <button type="button" className="fil-search btn arrow-btn">
                <img src={backIcon} alt="return"/>
            </button>
        </NavLink>
                <form className="d-flex input-group fil-search search-bar" role="search">
                    <input type="search"
                    className="form-control search" 
                    placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </div>


    )
}

// TODO: Add input for button names and 'selected' classes
// FilterSection inputs:
    // CharName - the characteristic category (ex: Clothing Type)
function FilterSection(props) {
    const { CharName } = props;

    

    return (
        <div className="box column top-bot-wrap">
        {/* <!-- Characteristic name --> */}
        <h2 className="no-space">{CharName}</h2>

        {/* <!-- Characteristics --> */}
        <div className="box">
            <FilterButton filterName="Tops" selected="btn-select"/>
            <FilterButton filterName="Bottoms" selected="btn-unselect"/>
            <FilterButton filterName="Outerwear" selected="btn-unselect"/>
            <FilterButton filterName="Shoes" selected="btn-unselect"/>
            <FilterButton filterName="Accessories" selected="btn-unselect"/>
            <FilterButton filterName="Gender-Affirming Items" selected="btn-unselect"/>
        </div>
    </div>
    )
}

// FilterButton inputs:
    // filterName - the characteristic (ex: Tops)
    // selected - a class that determines whether or not the characteristic
        // has been selected (changing its appearance)
function FilterButton(props) {
    const { filterName, selected } = props;
    let classN = "btn " + selected;

    return (
        <button type="button"
        className={classN}>{filterName}</button>
    )
}

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
            <NavLink to="/">
                <button type="button" className="btn btn-save">Apply</button>
            </NavLink>
        </>
    )
}
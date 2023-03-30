// SEARCH AND FILTER - Displays search bar and several filters: Clothing Type, Size, Style, Color, Condition, Brand.
// User can type in the search bar to search for listings by text (searches title and description).
// User can select the category buttons to filter listings by category.
// User can click the apply button to view listings of all types with the search and filter(s) applied.

// PACKAGES
import { NavLink } from 'react-router-dom';

// DATA
import backIcon from './../../assets/icon/keyboard-arrow-return.png';

// Clothing Type Characteristics
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

// Style Characteristics
let styleCharsObj = {
    charTypeName: "Style",
    charsArr: [{charName: "Feminine", selectState: "unselect"},
        {charName: "Androgynous", selectState: "unselect"},
        {charName: "Masculine", selectState: "unselect"}
    ]
}

// Color Characteristics
let colorsObj = {
    charTypeName: "Color",
    charsArr: [{ charName: "Pink", selectState: "unselect" },
        {charName: "Red", selectState: "unselect"},
        {charName: "Orange", selectState: "unselect"},
        {charName: "Yellow", selectState: "unselect"},
        {charName: "Green", selectState: "unselect"},
        {charName: "Blue", selectState: "unselect"},
        {charName: "Purple", selectState: "unselect"},
        {charName: "Black", selectState: "unselect"},
        {charName: "White", selectState: "unselect"},
        {charName: "Brown", selectState: "unselect"},
        {charName: "Beige", selectState: "unselect"},
        {charName: "Gray", selectState: "unselect"}
    ]
}

// Condition Characteristics
let conditionsObj = {
    charTypeName: "Condition",
    charsArr: [{ charName: "New", selectState: "unselect" },
        {charName: "Excellent", selectState: "unselect"},
        {charName: "Good", selectState: "unselect"},
        {charName: "Fair", selectState: "unselect"}
    ]
}

// Brand Characteristics
let brandsObj = {
    charTypeName: "Brand",
    charsArr: [{ charName: "gc2b", selectState: "unselect" },
        {charName: "TomboyX", selectState: "unselect"},
        {charName: "H&M", selectState: "unselect"},
        {charName: "UNIQLO", selectState: "unselect"},
        {charName: "Old Navy", selectState: "unselect"}
    ]
}

// All characteristics objects
let allCharsObjArr = [
    clothingTypeCharsObj,
    styleCharsObj,
    colorsObj,
    conditionsObj,
    brandsObj
]

// TODO: Make data dynamic so that we can easily update 
export function SearchFilter() {
    let filterSectionElemArr = allCharsObjArr.map((charsObj) => {
        return (
            <FilterSection charsObj={charsObj}/>
        )
    })

    return (
        <>
        {/* Navbar */}
        <SearchFilterNav/>

        {/* Main content */}
        <div className="side-wrap box column">
            {/* Header */}
            <h1 className="no-space">Browse by...</h1>

            {/* Filter Sections (Clothing Type, Style, etc.) */}
            { filterSectionElemArr }

            {/* <!-- TODO: Size --> */}
            {/* <SizeFilterSection/> */}

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
    const { charsObj } = props;
    let charName = charsObj.charTypeName;

    let filterButtonElemArr = charsObj.charsArr.map((characteristic) => {
        let { charName, selectState } = characteristic;
        let selectClassN = "btn-" + selectState;

        return (
            <FilterButton filterName={charName} selected={selectClassN} key={charName}/>
        )
    })

    return (
        <div className="box column top-bot-wrap">
        {/* <!-- Characteristic name --> */}
        <h2 className="no-space">{charName}</h2>

        {/* <!-- Characteristics --> */}
        <div className="box">
            { filterButtonElemArr }
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
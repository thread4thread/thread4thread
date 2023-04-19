// LISTING DETAILS - Displays details about one listing.
// User can click "I'm interested!" button to initiate an exchange.
//Packages
import { NavLink } from 'react-router-dom';

// ICONS
import moreIcon from './../../assets/icon/more.png';
import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png';

// DATA
import pfp from './../../assets/img/blank-pfp.png';
import listingImg from './../../assets/img/sweater.png'
let listingTitle = "Gingham Sweater Vest";
let userHandle = "Taito123";
let listingDesc = "This vest is perfect for layering over a shirt or blouse and adds a touch of preppy style to any outfit. The sweater vest is versatile and can be dressed up or down depending on the occasion.";

const listingObj = {
    type: {
        detailName: "Type",
        value: "Shirt"},
    appr: {
        detailName: "Appearance",
        value: "Androgynous"},
    color: {
        detailName: "Color",
        value: "Black, White"},
    cond: {
        detailName: "Condition",
        value: "Lightly used"}
}

// const listingSizeObj = {
//     bust: {
//         detailName: "Bust",
//         value: 18},
//     len: {
//         detailName: "Length",
//         value: 28},
//     sleeve: {
//         detailName: "Sleeve",
//         value: 0}
// }

export function ListingDetails() {
    return (
        <>

        {/* <!-- Header --> */}
        <MakeHeader pfpPath={pfp} listingTitle={listingTitle} userHandle={userHandle}/>

        {/* <!-- Image --> */}
        <MakeImage imgPath={listingImg}/>

        {/* <!-- TODO: Favoriting (will add padding) --> */}

        {/* Description */}
        <MakeDesc listingDesc={listingDesc}/>

        {/* <!-- Overview Section --> */}
        <MakeOverview listingObj={listingObj} 
        // TODO: size
        // listingSizeObj={listingSizeObj}
        />

        {/* <!-- "I'm interested!" Button --> */}
        <MakeButton/>
        </>
    )
}

function MakeHeader(props) {
    const { pfpPath, listingTitle, userHandle } = props;

    return (
        <div className="box center-align-hor side-wrap">
            <NavLink to='../lists-type-x'>
                <button type="button" className="btn arrow-btn p-0">
                    <img src={ArrowIcon} alt="return"/>
                </button>
            </NavLink>
            <img src={pfpPath} alt="Blank user profile pic" className="img-mini"/>
                    
            <div className="tight-box column">
                <strong>{listingTitle}</strong>
                <p className="no-space">@{userHandle}</p>
            </div>
            <img src={moreIcon} alt="Horizontal dot dot dot" className="img-mini right-item"/>
        </div>
    )
}

function MakeImage(props) {
    let { imgPath } = props;

    return (
        <div className="gray-bg">
            <img src={imgPath} alt="listingObj" className="center-item-vert img-lg"/>
        </div>
    )
}

function MakeDesc(props) {
    let { listingDesc } = props;

    return (
        <div className="side-wrap">
            {/* <!-- Description --> */}
            <div className="box column">
                {/* <!-- Heading --> */}
                <h1>Description</h1>

                {/* <!-- Desc text --> */}
                <p>{listingDesc}</p>
            </div>

        </div>
    )
}

function MakeOverview(props) {
    let { listingObj
        // listingSizeObj // TODO: size
    } = props;

    return (
        <div className="gray-bg side-wrap box column top-bot-wrap">
        {/* <!-- Extra top/bot padding --> */}
        <div className="top-bot-wrap">
            {/* TODO: Make a MakeTextChunk subcomp for Desc, Overview, and Measurements */}
            {/* <!-- Heading --> */}
            <h1>Overview</h1>

            {/* <!-- Text --> */}
            <div className="box column">
                <MakeDetails listingObj={listingObj} outerWrap="" innerWrap="item-row"/>
                
                {/* <!-- TODO: Measurements --> */}
                {/* <div className="item-row column"> */}
                    {/* Heading */}
                    {/* <h2>Measurements (in)</h2> */}

                    {/* Text */}
                    {/* <MakeDetails listingObj={listingSizeObj} outerWrap="item-row" innerWrap=""/> */}
                {/* </div> */}
            </div>
        </div>
        </div>
    )
}

function MakeDetails(props) {
    let { listingObj, outerWrap, innerWrap } = props;
    let detailArr = Object.keys(listingObj);
    
    let detailElemArr = detailArr.map((detail) => {
        let detailName = listingObj[detail].detailName;
        let listingDetail = listingObj[detail].value;

        return (
            <MakeDetail listingDetail={listingDetail} detailName={detailName} innerWrap={innerWrap} key={detailName}/>
        )
    });

    return (
        <div className="box column">
            <div className={outerWrap}>
            { detailElemArr }
            </div>
        </div>
    )
}

function MakeDetail(props) {
    let { listingDetail, detailName, innerWrap } = props;

    return (
        <div className={innerWrap}>
            <strong>{detailName}:</strong>
            <p className="no-space">{listingDetail}</p>
        </div>
    )
}

function MakeButton() {
    return (
        <>
        <button type="button" className="btn btn-save side-wrap list-btn">I'm interested!</button>
        {/* <!-- Invisible placeholder to add extra space at bottom --> */}
        <button type="button" className="btn invisible list-btn">I'm interested!</button>
        </>
    )
}
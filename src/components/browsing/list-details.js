// LISTING DETAILS - Displays details about one listing.
// User can click "I'm interested!" button to initiate an exchange.
//Packages
import { NavLink } from 'react-router-dom';
import { getDatabase, ref, onValue, get } from 'firebase/database';
import { useEffect, useState } from 'react';



// ICONS
import ArrowIcon from './../../assets/icon/keyboard-arrow-return.png';

// DATA
import pfp from './../../assets/img/blank-pfp.png';
let userHandle = "Taito123";
let displayDetails = ['type', 'appearance', 'color', 'condition'];


export function ListingDetails() {
    const listing = localStorage.getItem('listing');
    const [listingsObj, setListingsObj] = useState({}); // TODO: only show results (currently shows 0 results from initial empty object before showing results from db)

    // Fetch listing data and set state of listingsObj
    useEffect(() => {
        const db = getDatabase();
        const listingDataRef = ref(db, "listingData"); // TODO: change to listingData

        //returns a function that will "unregister" (turn off) the listener
        const unregisterFunction = onValue(listingDataRef, (snapshot) => {
        const listingDataValue = snapshot.val();
        //...set state variable, etc...
        setListingsObj(listingDataValue);
        })

        //cleanup function for when component is removed
        function cleanup() {
        unregisterFunction(); //call the unregister function
        }
        return cleanup; //effect hook callback returns the cleanup function
    }, []) //empty array is the second argument to the `useEffect()` function.
    //It says to only run this effect on first render

    let list = {};
    Object.keys(listingsObj).map((key) => {
        if (key === listing) {
            list = listingsObj[key];
        }
    });

    return (
        <div className='create-list'>

        {/* <!-- Header --> */}
        <MakeHeader pfpPath={pfp} listingTitle={list.title} userHandle={userHandle} listType={list.exchangeType}/>

        {/* <!-- Image --> */}
        <MakeImage imgPath={list.filePath}/>

        {/* <!-- TODO: Favoriting (will add padding) --> */}

        {/* Description */}
        <div>
            <MakeDesc listingDesc={list.desc}/>

            {/* <!-- Overview Section --> */}
            <MakeOverview listingObj={list} 
            // TODO: size
            // listingSizeObj={listingSizeObj}
            />
        </div>
        

        {/* <!-- "I'm interested!" Button --> */}
        <MakeButton/>
        </div>
    )
}

function MakeHeader(props) {
    const { pfpPath, listingTitle, userHandle, listType } = props;

    return (
        <div className="header box center-align-hor side-wrap">
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
            <div className='title top-right'>
                {listType}
            </div>
            {/* <img src={moreIcon} alt="Horizontal dot dot dot" className="img-mini right-item"/> */}
        </div>
    )
}

function MakeImage(props) {
    let { imgPath } = props;

    return (
        <div className="img-detail img-container gray-bg">
            <img src={imgPath} alt="listingObj" className="center-item-vert img-lg"  width="100%" height="100%"/>
        </div>
    )
}

function MakeDesc(props) {
    let { listingDesc } = props;

    return (
        <div className="description flex-fill side-wrap top-bot-wrap">
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
    let { listingObj } = props;

    return (
        <div className="overview side-wrap box column top-bot-wrap">
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
        let detailName = detail;
        let listingDetail = listingObj[detail];
        if(displayDetails.includes(detail)) {
            return (
                <MakeDetail listingDetail={listingDetail} detailName={detailName} innerWrap={innerWrap} key={detailName}/>
            )
        }
        
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
        <button type="button" className="btn invisible list-btn">I'm interested!</button>
        </>
    )
}
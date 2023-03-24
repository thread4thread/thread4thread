// LISTING DETAILS - Displays details about one listing.
// User can click "I'm interested!" button to initiate an exchange.

// ICONS
import moreIcon from './../../assets/icon/more.png';

// DATA
import pfp from './../../assets/img/blank-pfp.png';
import listImg from './../../assets/img/sweater.png'
let listTitle = "Gingham Sweater Vest";
let userHandle = "Taito123";
let listDesc = "This vest is perfect for layering over a shirt or blouse and adds a touch of preppy style to any outfit. The sweater vest is versatile and can be dressed up or down depending on the occasion.";

const listObj = {
    type: {
        detName: "Type",
        value: "Shirt"},
    appr: {
        detName: "Appearance",
        value: "Androgynous"},
    color: {
        detName: "Color",
        value: "Black, White"},
    cond: {
        detName: "Condition",
        value: "Lightly used"}
}

const listSizeObj = {
    bust: {
        detName: "Bust",
        value: 18},
    len: {
        detName: "Length",
        value: 28},
    sleeve: {
        detName: "Sleeve",
        value: 0}
}

export function ListDetails() {
    return (
        <>

        {/* <!-- Header --> */}
        <MakeHeader pfpPath={pfp} listTitle={listTitle} userHandle={userHandle}/>

        {/* <!-- Image --> */}
        <MakeImage imgPath={listImg}/>

        {/* <!-- TODO: Favoriting (will add padding) --> */}
        <MakeDesc listDesc={listDesc}/>

        {/* <!-- Overview Section --> */}
        <MakeOverview listObj={listObj} listSizeObj={listSizeObj}/>

        {/* <!-- "Inquire" Button --> */}
        <button type="button" className="btn btn-save side-wrap list-btn">I'm interested!</button>
        {/* <!-- Invisible placeholder to add extra space at bottom --> */}
        <button type="button" className="btn invisible list-btn">I'm interested!</button>


        </>
    )
}

function MakeHeader(props) {
    const { pfpPath, listTitle, userHandle } = props;

    return (
        <div className="box center-align-hor side-wrap">
            <img src={pfpPath} alt="Blank user profile pic" className="img-mini"/>
                    
            <div className="tight-box column">
                <strong>{listTitle}</strong>
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
            <img src={imgPath} alt="listObj" className="center-item-vert img-lg"/>
        </div>
    )
}

function MakeDesc(props) {
    let { listDesc } = props;

    return (
        <div className="side-wrap">
            {/* <!-- Description --> */}
            <div className="box column">
                {/* <!-- Heading --> */}
                <h1>Description</h1>

                {/* <!-- Desc text --> */}
                <p>{listDesc}</p>
            </div>

        </div>
    )
}

function MakeOverview(props) {
    let { listObj, listSizeObj } = props;

    return (
        <div className="gray-bg side-wrap box column top-bot-wrap">
        {/* <!-- Extra top/bot padding --> */}
        <div className="top-bot-wrap">
            {/* <!-- Heading --> */}
            <h1>Overview</h1>

            {/* <!-- Text --> */}
            <div className="box column">
                <MakeDetails listObj={listObj} outerWrap="" innerWrap="item-row"/>
                
                {/* <!-- Measurements --> */}
                <div className="item-row column">
                    <h2>Measurements (in)</h2>

                    <MakeDetails listObj={listSizeObj} outerWrap="item-row" innerWrap=""/>
                </div>
            </div>
        </div>
        </div>
    )
}

function MakeDetails(props) {
    let { listObj, outerWrap, innerWrap } = props;
    let detArr = Object.keys(listObj);
    
    let detElemArr = detArr.map((det) => {
        let detName = listObj[det].detName;
        let listDet = listObj[det].value;

        return (
            <MakeDetail listDet={listDet} detName={detName} innerWrap={innerWrap} key={detName}/>
        )
    });

    return (
        <div className="box column">
            <div className={outerWrap}>
            { detElemArr }
            </div>
        </div>
    )
}

function MakeDetail(props) {
    let { listDet, detName, innerWrap } = props;

    return (
        <div className={innerWrap}>
            <strong>{detName}:</strong>
            <p className="no-space">{listDet}</p>
        </div>
    )
}
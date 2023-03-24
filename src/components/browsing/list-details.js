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
const listSize = {
    bust: 18,
    len: 28,
    sleeve: 0
}
const listing = {
    type: "Shirt",
    appr: "Androgynous",
    color: "Black, White",
    cond: "Lightly used",
    size: listSize
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
        <MakeOverview list={listing}/>

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
            <img src={imgPath} alt="listing" className="center-item-vert img-lg"/>
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
    const { list } = props;

    return (
        <div className="gray-bg side-wrap box column top-bot-wrap">
        {/* <!-- Extra top/bot padding --> */}
        <div className="top-bot-wrap">
            {/* <!-- Heading --> */}
            <h1>Overview</h1>

            {/* <!-- Text --> */}
            <div className="box column">
                {/* <!-- Item Type --> */}
                <div className="item-row">
                    <strong>Item Type</strong>
                    <p className="no-space">{list.type}</p>
                </div>

                {/* <!-- Appearance --> */}
                <div className="item-row">
                    <strong>Appearance</strong>
                    <p className="no-space">{list.appr}</p>
                </div>

                {/* <!-- Color --> */}
                <div className="item-row">
                    <strong>Color</strong>
                    <p className="no-space">{list.color}</p>
                </div>
                
                {/* <!-- Condition --> */}
                <div className="item-row">
                    <strong>Condition</strong>
                    <p className="no-space">{list.cond}</p>
                </div>
                
                {/* <!-- Measurements --> */}
                <div className="item-row column">
                    <h2>Measurements</h2>

                    <div className="item-row">
                        <div>
                            <strong>Bust:</strong>
                            <p className="no-space">{list.size.bust}in</p>
                        </div>
                        
                        <div>
                            <strong>Length:</strong>
                            <p className="no-space">{list.size.len}in</p>
                        </div>

                        <div>
                            <strong>Sleeve:</strong>
                            <p className="no-space">{list.size.sleeve}in</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
// LISTING DETAILS - Displays details about one listing.
// User can click "I'm interested!" button to initiate an exchange.

// ICONS
import moreIcon from './../../assets/icon/more.png';

// DATA
import pfp from './../../assets/img/blank-pfp.png';
import listImg from './../../assets/img/sweater.png'

export function ListDetails() {
    return (
        <>

        {/* <!-- Header & Image Section --> */}
        <div>
            {/* <!-- Header --> */}
            <div className="box center-align-hor side-wrap">
                <img src={pfp} alt="Blank user profile pic" className="img-mini"/>
                
                <div className="tight-box column">
                    <strong>Gingham Sweater Vest</strong>
                    <p className="no-space">@Taito123</p>
                </div>

                <img src={moreIcon} alt="Horizontal dot dot dot" className="img-mini right-item"/>
            </div>

            {/* <!-- Image --> */}
            <div className="gray-bg">
                <img src={listImg} alt="listing" className="center-item-vert img-lg"/>
            </div>
        </div>

        {/* <!-- Favoriting & Description Section --> */}
        <div className="side-wrap">
            {/* <!-- TODO: Favoriting (will add padding) --> */}
            <div></div>

            {/* <!-- Description --> */}
            <div className="box column">
                {/* <!-- Heading --> */}
                <h1>Description</h1>

                {/* <!-- Desc text --> */}
                <p>This vest is perfect for layering over a shirt or blouse and adds a touch of preppy style to any outfit. The sweater vest is versatile and can be dressed up or down depending on the occasion.</p>
            </div>

        </div>

        {/* <!-- Overview Section --> */}
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
                    <p className="no-space">Shirt</p>
                </div>

                {/* <!-- Appearance --> */}
                <div className="item-row">
                    <strong>Appearance</strong>
                    <p className="no-space">Androgynous</p>
                </div>

                {/* <!-- Color --> */}
                <div className="item-row">
                    <strong>Color</strong>
                    <p className="no-space">Black, White</p>
                </div>
                
                {/* <!-- Condition --> */}
                <div className="item-row">
                    <strong>Condition</strong>
                    <p className="no-space">Lightly Used</p>
                </div>
                
                {/* <!-- Measurements --> */}
                <div className="item-row column">
                    <h2>Measurements</h2>

                    <div className="item-row">
                        <div>
                            <strong>Bust:</strong>
                            <p className="no-space">18in</p>
                        </div>
                        
                        <div>
                            <strong>Length:</strong>
                            <p className="no-space">28in</p>
                        </div>

                        <div>
                            <strong>Sleeve:</strong>
                            <p className="no-space">0in</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        {/* <!-- "Inquire" Button --> */}
        <a href="../notifications/exchange-complete.html">
            <button type="button" className="btn btn-save side-wrap list-btn">I'm interested!</button>
        </a>
        {/* <!-- Invisible placeholder to add extra space at bottom --> */}
        <button type="button" className="btn invisible list-btn">I'm interested!</button>


        </>
    )
}
// CREATE LISTING - Displays fields for creating a listing.
// User can type in text forms to define listing title, size*, and description.
// User can select listing characteristics.
// User can attach a photo of listing.
// User can click "Publish" button to make their listing public and be notified that their listing was successfully published.**

// RULES
// *Item type must be filled out to add size.
// **Required fields must be filled out to publish.

export function CreateList() {
    return (
        <div className="side-wrap box column">
        
        {/* <!-- Fields --> */}
        <div className="box column">
        {/* <!-- TODO: use aria-describedby to connect labels to inputs --> */}
        
            {/* <!-- Listing Title (text input) --> */}
            <div className="section">
                {/* <!-- Label --> */}
                <label id="list-name-label" className="no-space strong">Title *</label>

                {/* <!-- Input --> */}
                <div className="input-group no-space">
                    <input type="text" className="form-control"
                    placeholder="Ex: Trans Tape, Blue Shirt"
                    aria-describedby="list-name-label"/>
                </div>
            </div>

            {/* <!-- Exchange Type (select input) --> */}
            <div className="section">
                {/* <!-- Label --> */}
                <label htmlFor="exch-type" className="no-space strong">Exchange Type *</label>

                {/* <!-- Input --> */}
                <select id="exch-type" className="form-select" aria-label="Exchange type choices">
                    <option defaultValue>Click to select</option>
                    <option value="1">Donation</option>
                    <option value="2">Request</option>
                    <option value="3">Trade</option>
                </select>
            </div>

            {/* <!-- Item Type (select input) --> */}
            <div className="section">
                {/* <!-- Label --> */}
                <label htmlFor="item-type-label" className="no-space strong">Item Type *</label>

                {/* <!-- Input --> */}
                <select id="exch-type" className="form-select" aria-label="Exchange types">
                    <option defaultValue>Click to select</option>
                    <option value="1">Top</option>
                    <option value="2">Bottom</option>
                    <option value="3">Underwear</option>
                    <option value="1">Outerwear</option>
                    <option value="2">Shoes</option>
                    <option value="3">Gender-Affirming Item</option>
                    <option value="3">Other</option>
                </select>
            </div>

            {/* <!-- Item Size (text input group) --> */}
            <div className="section">
                {/* <!-- Label --> */}
                <label htmlFor="size-text" className="no-space strong">Size *</label>

                {/* <!-- Characteristics --> */}
                <p className="no-space warning">Select an item type first!</p>
                {/* <!-- TODO: Decide how to display sizes -->
                <!-- Idea 1 -->
                <!-- <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div role="separator" className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button">
                </div> -->

                <!-- Idea 2 -->
                <!-- <div className="box">
                    <div className="size-box column">
                        <label htmlFor="measure1-">Measure 1:</label>
                        <input type="number" className="form-control size-input" id="filter-bust">
                    </div>
                </div> --> */}
            </div>

            {/* <!-- Image (image input) --> */}
            {/* <!-- TODO: Figure out image input --> */}
            <div className="section">
                <label className="form-label strong" htmlFor="customFile">Image</label>
                <input type="file" className="form-control" id="customFile" />
            </div>

            {/* <!-- Item Description (text area input) --> */}
            <div className="section">
                {/* <!-- Label --> */}
                <label htmlFor="item-desc" className="no-space strong">Description</label>

                {/* <!-- Input --> */}
                <div className="input-group">
                    <textarea type="text" id="item-desc" className="form-control"
                    placeholder="Type here"
                    aria-describedby="list-desc-label"></textarea>
                </div>
            </div>

            {/* <!-- Item Appearance (multiple select input) --> */}
            <div className="section">
                {/* <!-- Label --> */}
                <label htmlFor="app-choices" className="no-space strong">Appearance</label>

                {/* <!-- Input --> */}
                <div id="app-choices" className="box">
                    <button type="button" className="btn btn-unselect">Feminine</button>
                    <button type="button" className="btn btn-unselect">Androgynous</button>
                    <button type="button" className="btn btn-unselect">Masculine</button>
                </div>
            </div>

            {/* <!-- Item Color (multiple select input) --> */}
            <div className="section">
                {/* <!-- Label --> */}
                <label htmlFor="color-choices" className="no-space strong">Color</label>

                {/* <!-- Input --> */}
                <div id="color-choices" className="box">
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

            {/* <!-- Item Condition (select input) --> */}
            <div className="section">
                {/* <!-- Label --> */}
                <label htmlFor="condition-choices" className="no-space strong">Condition</label>

                {/* <!-- Input --> */}
                <select id="condition-choices" className="form-select" aria-label="Condition choices">
                    <option defaultValue>Click to select</option>
                    <option value="1">New</option>
                    <option value="2">Excellent</option>
                    <option value="3">Good</option>
                    <option value="4">Fair</option>
                </select>
            </div>

            {/* <!-- Item Brand (text input) --> */}
            <div className="section">
                {/* <!-- Label --> */}
                <label id="brand-label" className="no-space strong">Brand</label>

                {/* <!-- Input --> */}
                <div className="input-group no-space">
                    <input type="text" className="form-control"
                    placeholder="Ex: gc2b, TomboyX"
                    aria-describedby="brand-label"/>
                </div>
            </div>
        </div>

        {/* <!-- Post button --> */}
        <>
        <a href="listing-published.html">
            <button type="button" className="btn btn-save list-btn">Publish</button>
        </a>
        {/* <!-- Invisible placeholder to add extra space at bottom --> */}
        <button type="button" className="btn invisible list-btn">PLACEHOLDER</button>
        </>
        </div>
    )
}
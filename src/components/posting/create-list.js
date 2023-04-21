// CREATE LISTING - Displays fields for creating a listing.
// User can type in text forms to define listing title, size*, and description.
// User can select listing characteristics.
// User can attach a photo of listing.
// User can click "Publish" button to make their listing public and be notified that their listing was successfully published.**

// RULES
// *Item type must be filled out to add size.
// **Required fields must be filled out to publish.

import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, push as firebasePush} from 'firebase/database';
import { NavLink } from 'react-router-dom';
import { storage } from './../account/f-config';
import {ref as storageRef, uploadBytes, listAll, getDownloadURL} from 'firebase/storage';

export function CreateList() {

    const [listingInfo, setListingInfo] = useState({});
    const [listingData, setListingData] = useState([]);
    const [imageUpload, setImageUpload] = useState(null);
    const [imageLink, setImageLink] = useState(null);

    // const [imageAsUrl, setImageAsUrl] = useState('')

    // const [inDB, setInDB] = useState(undefined)

    // const storage = getStorage();
    const db = getDatabase();

    //set up connection to db
    useEffect(()=> {
        const listRef = ref(db, "listingData");
        const offFunction = onValue(listRef, (snapshot) => {
            const newListing = snapshot.val();
            let currentListings = [...listingData, newListing];
            setListingData(currentListings);
        })
        //turn off listener
        function cleanup() {
            offFunction();
        }
        return cleanup;
    }, [db])

    //handle title
    function handleTitle(event) {
        event.preventDefault();
        const title = event.target.value;
        let val;
        if(title.length < 0) {
            val = {title: " "}
        } else {
            val = {title: title};
        }
        const currentInfo = Object.assign(listingInfo, val);
        setListingInfo(currentInfo);
    }

    //handle exchange type
    function handleExchangeType(event) {
        event.preventDefault();
        const type = event.target.value;
        let val = {exchangeType: type};
        const currentInfo = Object.assign(listingInfo, val);
        setListingInfo(currentInfo);
    }

    //Handle item type
    function handleItemType(event) {
        event.preventDefault();
        const type = event.target.value;
        let val = {itemType: type};
        const currentInfo = Object.assign(listingInfo, val);
        setListingInfo(currentInfo);
    }

    //handle image
    function handleImage(event) {
        event.preventDefault();
        const file = event.target.files[0];
        setImageUpload(file);
        console.log(file);
        let val = {filePath: file};
        const currentInfo = Object.assign(listingInfo, val);
        setListingInfo(currentInfo);

        // const file = event.target.files[0];
        // const uploadTask = storageRef.child(`images/${file.name}`).put(file);
        // uploadTask.then((snapshot) => {
        //     console.log('Image uploaded successfully');
        //     snapshot.ref.getDownloadURL().then((url) => {
        //     console.log('Image URL:', url);
        //     // Save the image URL to your database or use it to display the image in your React app
        //     });
        // }).catch((error) => {
        //     console.error('Error uploading image:', error);
        // });

    }

    //handle description
    function handleDescription(event) {
        event.preventDefault();
        const description = event.target.value;
        let val;
        if(description.length < 0) {
            val = {description: ""}
        } else {
            val = {description: description};
        }
        const currentInfo = Object.assign(listingInfo, val);
        setListingInfo(currentInfo);
    }

    //handle appearance Might need to be changed
    function handleAppearance(event) {
        event.preventDefault();

        const appearance = []; 

        event.target.classList.toggle('active');
  
        //store desired appearance 
        if(event.target.classList.contains('active')) {
          appearance.push(event.target.value);
        } else {
          let index = appearance.indexOf(event.target.value)
          appearance.splice(index, 1);
        }

        const val = {appearance: appearance};
        const currentInfo = Object.assign(listingInfo, val);
        setListingInfo(currentInfo); 
    }

    //stores color data 
    const color = []; 

    //handle color Might need to be changed
    function handleColor(event) {
        event.preventDefault();

        event.target.classList.toggle('active');
  
        //store desired appearance
        if(event.target.classList.contains('active')) {
          color.push(event.target.value);
        } else {
          let index = color.indexOf(event.target.value)
          color.splice(index, 1);
        }
        const val = {color: color};
        const currentInfo = Object.assign(listingInfo, val);
        setListingInfo(currentInfo); 
    }

    //handle condition
    function handleCondition(event) {
        event.preventDefault();
        const condition = event.target.value;
        let val = {condition: condition};
        const currentInfo = Object.assign(listingInfo, val);
        setListingInfo(currentInfo);
    }

    //handle brand
    function handleBrand(event) {
        event.preventDefault();
        const brand = event.target.value;
        let val;
        if(brand.length < 0) {
            val = {brand: " "}
        } else {
            val = {brand: brand};
        }
        const currentInfo = Object.assign(listingInfo, val);
        setListingInfo(currentInfo);
    }

    //submit 
    // const imageLinkRef = storageRef(storage, `${imageUpload.name}`);

    function submitCallback(event) {
        if(imageUpload == null) {
            return;
        }
        const imageRef = storageRef(storage,`${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("image uploaded");
        })

        const listingRef = ref(db, "listingData");
        firebasePush(listingRef, listingInfo);

    }

    // useEffect(() => {
    //     listAll(imageLinkRef).then((response) => {
    //         console.log()
    //     })
    // }, []);

    return (
        <form role='form' method='GET'>
            <div className="side-wrap box column">
                
                {/* <!-- Fields --> */}
                <div className="box column">
                {/* <!-- TODO: use aria-describedby to connect labels to inputs --> */}
                
                    {/* <!-- Listing Title (text input) --> */}
                    <div className="section">
                        {/* <!-- Label --> */}
                        <label htmlFor="list-name-label" className="no-space strong">Title *</label>

                        {/* <!-- Input --> */}
                        <div className="input-group no-space">
                            <input id="title" onBlur={handleTitle} type="text" className="form-control"
                            placeholder="Ex: Trans Tape, Blue Shirt"
                            aria-describedby="list-name-label"/>
                        </div>
                    </div>

                    {/* <!-- Exchange Type (select input) --> */}
                    <div className="section">
                        {/* <!-- Label --> */}
                        <label htmlFor="exch-type" className="no-space strong">Exchange Type *</label>

                        {/* <!-- Input --> */}
                        <select onBlur={handleExchangeType} id="exch-type" className="form-select" aria-label="Exchange type choices">
                            <option defaultValue>Click to select</option>
                            <option value="Offer">Offer</option>
                            <option value="Request">Request</option>
                            <option value="Trade">Trade</option>
                        </select>
                    </div>

                    {/* <!-- Item Type (select input) --> */}
                    <div className="section">
                        {/* <!-- Label --> */}
                        <label htmlFor="item-type-label" className="no-space strong">Item Type *</label>

                        {/* <!-- Input --> */}
                        <select onBlur={handleItemType} id="exch-type" className="form-select" aria-label="Exchange types">
                            <option defaultValue>Click to select</option>
                            <option value="Top">Top</option>
                            <option value="Bottom">Bottom</option>
                            <option value="Underwear">Underwear</option>
                            <option value="Outerwear">Outerwear</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Gender-Affirming Item">Gender-Affirming Item</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>            

                    {/* <!-- Image (image input) --> */}
                    {/* <!-- TODO: Figure out image input --> */}
                    <div className="section">
                        <label className="form-label strong" htmlFor="customFile">Image</label>
                        <input onChange={handleImage} type="file" className="form-control" id="customFile" />
                    </div>

                    {/* <!-- Item Description (text area input) --> */}
                    <div className="section">
                        {/* <!-- Label --> */}
                        <label htmlFor="item-desc" className="no-space strong">Description</label>

                        {/* <!-- Input --> */}
                        <div className="input-group">
                            <textarea onBlur={handleDescription} type="text" id="item-desc" className="form-control"
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
                            <button onClick={handleAppearance} type="button" value="Feminine" className="btn btn-outline-dark">Feminine</button>
                            <button onClick={handleAppearance} type="button" value="Androgynous" className="btn btn-outline-dark">Androgynous</button>
                            <button onClick={handleAppearance} type="button" value="Masculine" className="btn btn-outline-dark">Masculine</button>
                        </div>
                    </div>

                    {/* <!-- Item Color (multiple select input) --> */}
                    <div className="section">
                        {/* <!-- Label --> */}
                        <label htmlFor="color-choices" className="no-space strong">Color</label>

                        {/* <!-- Input --> */}
                        <div id="color-choices" className="box">
                            <button onClick={handleColor} type="button" value="Pink" className="btn btn-outline-dark">Pink</button>
                            <button onClick={handleColor} type="button" value="Red" className="btn btn-outline-dark">Red</button>
                            <button onClick={handleColor} type="button" value="Orange" className="btn btn-outline-dark">Orange</button>
                            <button onClick={handleColor} type="button" value="Yellow" className="btn btn-outline-dark">Yellow</button>
                            <button onClick={handleColor} type="button" value="Green"className="btn btn-outline-dark">Green</button>
                            <button onClick={handleColor} type="button" value="Blue" className="btn btn-outline-dark">Blue</button>
                            <button onClick={handleColor} type="button" value="Purple" className="btn btn-outline-dark">Purple</button>
                            <button onClick={handleColor} type="button" value="Black" className="btn btn-outline-dark">Black</button>
                            <button onClick={handleColor} type="button" value="White" className="btn btn-outline-dark">White</button>
                            <button onClick={handleColor} type="button" value="Brown" className="btn btn-outline-dark">Brown</button>
                            <button onClick={handleColor} type="button" value="Beige" className="btn btn-outline-dark">Beige</button>
                            <button onClick={handleColor} type="button" value="Gray" className="btn btn-outline-dark">Gray</button>
                        </div>
                    </div>

                    {/* <!-- Item Condition (select input) --> */}
                    <div className="section">
                        {/* <!-- Label --> */}
                        <label htmlFor="condition-choices" className="no-space strong">Condition</label>

                        {/* <!-- Input --> */}
                        <select onBlur={handleCondition} id="condition-choices" className="form-select" aria-label="Condition choices">
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
                        <label htmlFor="brand-label" className="no-space strong">Brand</label>

                        {/* <!-- Input --> */}
                        <div onBlur={handleBrand} id="brand" className="input-group no-space">
                            <input type="text" className="form-control"
                            placeholder="Ex: gc2b, TomboyX"
                            aria-describedby="brand-label"/>
                        </div>
                    </div>
                </div>

                {/* <!-- Post button --> */}
                <>
                <NavLink to="../lists-all-types">
                    <button onClick={submitCallback} type="button" className="btn btn-save list-btn">Publish</button>
                </NavLink>
                {/* <!-- Invisible placeholder to add extra space at bottom --> */}
                <button type="button" className="btn invisible list-btn">PLACEHOLDER</button>
                </>
            </div>
        </form>
    )
}
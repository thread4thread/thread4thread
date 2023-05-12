import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const filtersObj = {
  exchangeType: [
    { category: "Exchange Type", charName: "Offer", selectState: "select" },
    { category: "Exchange Type", charName: "Trade", selectState: "unselect" },
    { category: "Exchange Type", charName: "Request", selectState: "unselect" },
  ],
  itemType: [
    { category: "Item Type", charName: "Tops", selectState: "select" },
    { category: "Item Type", charName: "Bottoms", selectState: "unselect" },
    { category: "Item Type", charName: "Outerwear", selectState: "unselect" },
    { category: "Item Type", charName: "Shoes", selectState: "unselect" },
    { category: "Item Type", charName: "Accessories", selectState: "unselect" },
    { category: "Item Type", charName: "Gender-Affirming Items", selectState: "unselect" }
  ],
  appearance: [
    { category: "Style", charName: "Feminine", selectState: "unselect" },
    { category: "Style", charName: "Androgynous", selectState: "unselect" },
    { category: "Style", charName: "Masculine", selectState: "unselect" }
  ],
  color: [
    { category: "Color", charName: "Pink", selectState: "unselect" },
    { category: "Color", charName: "Red", selectState: "unselect" },
    { category: "Color", charName: "Orange", selectState: "unselect" },
    { category: "Color", charName: "Yellow", selectState: "unselect" },
    { category: "Color", charName: "Green", selectState: "unselect" },
    { category: "Color", charName: "Blue", selectState: "unselect" },
    { category: "Color", charName: "Purple", selectState: "unselect" },
    { category: "Color", charName: "Black", selectState: "unselect" },
    { category: "Color", charName: "White", selectState: "unselect" },
    { category: "Color", charName: "Brown", selectState: "unselect" },
    { category: "Color", charName: "Beige", selectState: "unselect" },
    { category: "Color", charName: "Gray", selectState: "unselect" }
  ],
  condition: [
    { category: "Condition", charName: "New", selectState: "unselect" },
    { category: "Condition", charName: "Excellent", selectState: "unselect" },
    { category: "Condition", charName: "Good", selectState: "unselect" },
    { category: "Condition", charName: "Fair", selectState: "unselect" }
  ],
  brand: [
    { category: "Brand", charName: "gc2b", selectState: "unselect" },
    { category: "Brand", charName: "TomboyX", selectState: "unselect" },
    { category: "Brand", charName: "H&M", selectState: "unselect" },
    { category: "Brand", charName: "UNIQLO", selectState: "unselect" },
    { category: "Brand", charName: "Old Navy", selectState: "unselect" }
  ]
};

const filtersArray = ['exchangeType', 'itemType', 'style', 'color', 'condition', 'brand'];

//Array of desired filters
const applyFilters = [];

export function FilterSection(props) {
  const [filters, setFilters] = useState({
    itemName: null,
    exchangeType: null,
    type: null,
    appearance: null,
    color: null,
    condition: null, 
    brand: null 
  });
  
  // const [searchTerm, setSearchTerm] = useState(undefined);


  //   const handleSearch = (event) => {
  //       let searchTermStr = (event.target.value).toLowerCase();
  //       setsearchTerm(searchTermStr);
  //       let matchingNameObj = allNameObjArr.find(dbNameObj => dbNameObj.name === searchTermStr);
  //       setsearchTermObj(matchingNameObj);
        
  //   }

  //   // Filter based off of name and selected/inputed filters
  //   const defaultFilter = {
  //       itemName: null,
  //       itemType: {
  //         'tops': null,
  //         'bottoms': null,
  //         'outerwear': null,
  //         'shoes': null,
  //         'accessories': null,
  //         'gender-affirming item': null
  //     },
  //       color: {
  //         'red': null,
  //         'orange': null,
  //         'yellow': null,
  //         'green': null,
  //         'blue': null,
  //         'purple': null,
  //         'pink': null,
  //         'black': null,
  //         'white': null,
  //         'brown': null
  //     },
  //       brand: null,
  //       exchangeType: {
  //         'Offer': null,
  //         'Request': null,
  //         'Trade': null
  //     },
  //       appearance: {
  //           'neutral': null,
  //           'feminine': null,
  //           'masculine': null
  //       }, 
  //       condition: {
  //         'new': null,
  //         'excellent': null,
  //         'good': null,
  //         'fair': null
  //       }
  //   }
  //   const [filterObj, setFilterObj] = useState({
  //     itemName: null,
  //     itemType: {
  //       'tops': null,
  //       'bottoms': null,
  //       'outerwear': null,
  //       'shoes': null,
  //       'accessories': null,
  //       'gender-affirming item': null
  //   },
  //     color: {
  //       'red': null,
  //       'orange': null,
  //       'yellow': null,
  //       'green': null,
  //       'blue': null,
  //       'purple': null,
  //       'pink': null,
  //       'black': null,
  //       'white': null,
  //       'brown': null
  //   },
  //     brand: null,
  //     exchangeType: {
  //       'Offer': null,
  //       'Request': null,
  //       'Trade': null
  //   },
  //     appearance: {
  //         'neutral': null,
  //         'feminine': null,
  //         'masculine': null
  //     }, 
  //     condition: {
  //       'new': null,
  //       'excellent': null,
  //       'good': null,
  //       'fair': null
  //     }
  //   })

  //   // Display results
  //   const [resultNameObjArr, setResultNameObjArr] = useState();

  //make exchange type so you can only choose one, set to local storage item, 
  //pass through to submit so it navs to right page
  const exchangeType = []; 

  function handleExchangeType(event) {
      event.preventDefault();
      event.target.blur();

      event.target.classList.toggle('active');
      localStorage.setItem("searchType", exchangeType);

      //store desired exchange type
      if(event.target.classList.contains('active')) {
        exchangeType.push(event.target.value);
      } else {
        let index = exchangeType.indexOf(event.target.value)
        exchangeType.splice(index, 1);
      }
      const val = {exchangeType: exchangeType};
      const currentInfo = Object.assign(filters, val);
      setFilters(currentInfo); 
  }

  //stores exchangeType data 
  const itemType = []; 

  function handleItemType(event) {
      event.preventDefault();
      event.target.blur();

      event.target.classList.toggle('active');

      //store desired exchange type
      if(event.target.classList.contains('active')) {
        itemType.push(event.target.value);
      } else {
        let index = itemType.indexOf(event.target.value)
        itemType.splice(index, 1);
      }
      const val = {type: itemType};
      const currentInfo = Object.assign(filters, val);
      setFilters(currentInfo); 
  }

  const appearance = []; 

  function handleAppearance(event) {
      event.preventDefault();
      event.target.blur();

      event.target.classList.toggle('active');

      //store desired exchange type
      if(event.target.classList.contains('active')) {
        appearance.push(event.target.value);
      } else {
        let index = appearance.indexOf(event.target.value)
        appearance.splice(index, 1);
      }
      const val = {appearance: appearance};
      const currentInfo = Object.assign(filters, val);
      setFilters(currentInfo); 
  }

  const color = []; 

  function handleColor(event) {
      event.preventDefault();
      event.target.blur();

      event.target.classList.toggle('active');

      //store desired exchange type
      if(event.target.classList.contains('active')) {
        color.push(event.target.value);
      } else {
        let index = color.indexOf(event.target.value)
        color.splice(index, 1);
      }
      const val = {color: color};
      const currentInfo = Object.assign(filters, val);
      setFilters(currentInfo); 
  }

  const condition = []; 

  function handleCondition(event) {
      event.preventDefault();
      event.target.blur();

      event.target.classList.toggle('active');

      //store desired exchange type
      if(event.target.classList.contains('active')) {
        condition.push(event.target.value);
      } else {
        let index = condition.indexOf(event.target.value)
        condition.splice(index, 1);
      }
      const val = {condition: condition};
      const currentInfo = Object.assign(filters, val);
      setFilters(currentInfo); 
  }

  const brand = []; 

  function handleBrand(event) {
      event.preventDefault();
      event.target.blur();

      event.target.classList.toggle('active');

      //store desired exchange type
      if(event.target.classList.contains('active')) {
        brand.push(event.target.value);
      } else {
        let index = brand.indexOf(event.target.value)
        brand.splice(index, 1);
      }
      const val = {brand: brand};
      const currentInfo = Object.assign(filters, val);
      setFilters(currentInfo); 
  }

  function submitCallback(event)  {
    // event.preventDefault();
    console.log(filters);
  }

  return (
    <form role='form' method='GET'>
        <div className="box column">
            
            {/* <!-- Fields --> */}
            <div className="box column">
            {/* <!-- TODO: use aria-describedby to connect labels to inputs --> */}
                {/* <!-- Exchange Type (select input) --> */}
                <div className="section">

                {/* <ul className="donate-now">
                  <li>
                    <input type="radio" id="Offer" name="exchagne type" />
                    <label htmlFor="exch-type">Offer</label>
                  </li>
                  <li>
                    <input type="radio" id="Request" name="exchagne type" />
                    <label htmlFor="exch-type">Request</label>
                  </li>
                  <li>
                    <input type="radio" id="Trade" name="exchagne type" checked="checked" />
                    <label htmlFor="exch-type">Trade</label>
                  </li>
                </ul> */}

                    {/* <!-- Label --> */}
                    <label htmlFor="exch-type" className=" strong">Exchange Type</label>

                    {/* <!-- Input --> */}
                    <div id="exch-choices" className="box">
                        <button onClick={handleExchangeType} type="button" value="Offer" className="btn btn-toggler">Offer</button>
                        <button onClick={handleExchangeType} type="button" value="Trade" className="btn btn-toggler">Trade</button>
                        <button onClick={handleExchangeType} type="button" value="Request" className="btn btn-toggler">Request</button>
                    </div>
                </div>

                {/* <!-- Item Type (select input) --> */}
                <div className="section">
                    {/* <!-- Label --> */}
                    <label htmlFor="item-type-label" className=" strong">Item Type</label>

                    {/* <!-- Input --> */}
                    <div id="item-choices" className="box">
                        <button onClick={handleItemType} type="button" value="Tops" className="btn btn-toggler">Tops</button>
                        <button onClick={handleItemType} type="button" value="Bottoms" className="btn btn-toggler">Bottoms</button>
                        <button onClick={handleItemType} type="button" value="Outerwear" className="btn btn-toggler">Outerwear</button>
                        <button onClick={handleItemType} type="button" value="Underwear" className="btn btn-toggler">Underwear</button>
                        <button onClick={handleItemType} type="button" value="Shoes" className="btn btn-toggler">Shoes</button>
                        <button onClick={handleItemType} type="button" value="Accessories" className="btn btn-toggler">Accessories</button>
                        <button onClick={handleItemType} type="button" value="Gender-Affirming Items" className="btn btn-toggler">Gender-Affirming Items</button>
                    </div>
                </div>            

                {/* <!-- Item Appearance (multiple select input) --> */}
                <div className="section">
                    {/* <!-- Label --> */}
                    <label htmlFor="app-choices" className=" strong">Appearance</label>

                    {/* <!-- Input --> */}
                    <div id="app-choices" className="box">
                        <button onClick={handleAppearance} type="button" value="Feminine" className="btn btn-toggler">Feminine</button>
                        <button onClick={handleAppearance} type="button" value="Androgynous" className="btn btn-toggler">Androgynous</button>
                        <button onClick={handleAppearance} type="button" value="Masculine" className="btn btn-toggler">Masculine</button>
                    </div>
                </div>

                {/* <!-- Item Color (multiple select input) --> */}
                <div className="section">
                    {/* <!-- Label --> */}
                    <label htmlFor="color-choices" className=" strong">Color</label>

                    {/* <!-- Input --> */}
                    <div id="color-choices" className="box">
                        <button onClick={handleColor} type="button" value="Pink" className="btn btn-toggler">Pink</button>
                        <button onClick={handleColor} type="button" value="Red" className="btn btn-toggler">Red</button>
                        <button onClick={handleColor} type="button" value="Orange" className="btn btn-toggler">Orange</button>
                        <button onClick={handleColor} type="button" value="Yellow" className="btn btn-toggler">Yellow</button>
                        <button onClick={handleColor} type="button" value="Green"className="btn btn-toggler">Green</button>
                        <button onClick={handleColor} type="button" value="Blue" className="btn btn-toggler">Blue</button>
                        <button onClick={handleColor} type="button" value="Purple" className="btn btn-toggler">Purple</button>
                        <button onClick={handleColor} type="button" value="Black" className="btn btn-toggler">Black</button>
                        <button onClick={handleColor} type="button" value="White" className="btn btn-toggler">White</button>
                        <button onClick={handleColor} type="button" value="Brown" className="btn btn-toggler">Brown</button>
                        <button onClick={handleColor} type="button" value="Beige" className="btn btn-toggler">Beige</button>
                        <button onClick={handleColor} type="button" value="Gray" className="btn btn-toggler">Gray</button>
                    </div>
                </div>

                {/* <!-- Item Condition (select input) --> */}
                <div className="section">
                    {/* <!-- Label --> */}
                    <label htmlFor="condition-choices" className=" strong">Condition</label>

                    {/* <!-- Input --> */}
                    <div id="condition-choices" className="box" aria-label="Condition choices">
                        <button onClick={handleCondition} type="button" value="New" className="btn btn-toggler">New</button>
                        <button onClick={handleCondition} type="button" value="Excellent" className="btn btn-toggler">Excellent</button>
                        <button onClick={handleCondition} type="button" value="Good" className="btn btn-toggler">Good</button>
                        <button onClick={handleCondition} type="button" value="Fair" className="btn btn-toggler">Fair</button>
                    </div>
                </div>

                {/* <!-- Item Brand (text input) --> */}
                <div className="section">
                    {/* <!-- Label --> */}
                    <label htmlFor="brand-label" className=" strong">Brand</label>

                    {/* <!-- Input --> */}
                    <div id="brand-choices" className="box" aria-label="Condition choices">
                        <button onClick={handleBrand} type="button" value="gc2b" className="btn btn-toggler">gc2b</button>
                        <button onClick={handleBrand} type="button" value="TomboyX" className="btn btn-toggler">TomboyX</button>
                        <button onClick={handleBrand} type="button" value="H&M" className="btn btn-toggler">H&M</button>
                        <button onClick={handleBrand} type="button" value="Uniqlo" className="btn btn-toggler">Uniqlo</button>
                        <button onClick={handleBrand} type="button" value="Old Navy" className="btn btn-toggler">Old Navy</button>

                    </div>
                </div>
            </div>
                {/* <!-- Post button --> */}
            <div>
              <NavLink to="../results" state={{filters: filters}}>
                  <button onClick={submitCallback} type="button" className="btn btn-save list-btn">Apply</button>
              </NavLink>
              {/* <!-- Invisible placeholder to add extra space at bottom --> */}
              <button type="button" className="btn invisible list-btn">PLACEHOLDER</button>
            </div>
        </div>
    </form>
  )

}

//stores exchangeType data 

import React from 'react';

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
  style: [
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

  const filterSec = filtersArray.map((category) => {
    const filterArray = filtersObj[category];

    //make section name in UI categoru rather than key
    filterArray.map((cat) => {
      category = cat.category;
    });

   // console.log(Object.values(filterArray).category);
    // const buttonEle = document.querySelectorAll('.' + category + ' button');

    const handleClick = (event) => {
      event.preventDefault();
      // buttonEle.forEach(button => {
      //   button.classList.remove('active');
      // });
      event.target.classList.toggle('active');

      //Keeps track of desired filters
      if(event.target.classList.contains('active')) {
        applyFilters.push(event.target.value);
      } else {
        let index = applyFilters.indexOf(event.target.value)
        applyFilters.splice(index, 1);
      }
    }

    const buttons = filterArray.map((filter) => {
      return (
        <button
          onClick={handleClick} key={filter.charName} type="button" className="btn btn-outline-dark" id={filter.category}>{filter.charName}</button>
      )
    })

    return (
      <div className="box column top-bot-wrap" key={category}>
        <h2 className="no-space">{category}</h2>
        <div className={"box " + category}>
          {buttons}
        </div>
      </div>
    )
  })

  return (
    <>
      {filterSec}
    </>
  )
}
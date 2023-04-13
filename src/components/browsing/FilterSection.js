import React, { useState } from 'react';

const filtersObj = {
  type: [
    { category: "type", charName: "Tops", selectState: "select" },
    { category: "type", charName: "Bottoms", selectState: "unselect" },
    { category: "type", charName: "Outerwear", selectState: "unselect" },
    { category: "type", charName: "Shoes", selectState: "unselect" },
    { category: "type", charName: "Accessories", selectState: "unselect" },
    { category: "type", charName: "Gender-Affirming Items", selectState: "unselect" }
  ],
  style: [
    { category: "style", charName: "Feminine", selectState: "unselect" },
    { category: "style", charName: "Androgynous", selectState: "unselect" },
    { category: "style", charName: "Masculine", selectState: "unselect" }
  ],
  color: [
    { category: "color", charName: "Pink", selectState: "unselect" },
    { category: "color", charName: "Red", selectState: "unselect" },
    { category: "color", charName: "Orange", selectState: "unselect" },
    { category: "color", charName: "Yellow", selectState: "unselect" },
    { category: "color", charName: "Green", selectState: "unselect" },
    { category: "color", charName: "Blue", selectState: "unselect" },
    { category: "color", charName: "Purple", selectState: "unselect" },
    { category: "color", charName: "Black", selectState: "unselect" },
    { category: "color", charName: "White", selectState: "unselect" },
    { category: "color", charName: "Brown", selectState: "unselect" },
    { category: "color", charName: "Beige", selectState: "unselect" },
    { category: "color", charName: "Gray", selectState: "unselect" }
  ],
  condition: [
    { category: "condition", charName: "New", selectState: "unselect" },
    { category: "condition", charName: "Excellent", selectState: "unselect" },
    { category: "condition", charName: "Good", selectState: "unselect" },
    { category: "condition", charName: "Fair", selectState: "unselect" }
  ],
  brand: [
    { category: "brand", charName: "gc2b", selectState: "unselect" },
    { category: "brand", charName: "TomboyX", selectState: "unselect" },
    { category: "brand", charName: "H&M", selectState: "unselect" },
    { category: "brand", charName: "UNIQLO", selectState: "unselect" },
    { category: "brand", charName: "Old Navy", selectState: "unselect" }
  ]
};

const filtersArray = ['type', 'style', 'color', 'condition', 'brand'];

export function FilterSection(props) {

  const filterSec = filtersArray.map((category) => {
  const filterArray = filtersObj[category];
  // const buttonEle = document.querySelectorAll('.' + category + ' button');

    const handleClick = (event) => {
      event.preventDefault();
      // buttonEle.forEach(button => {
      //   button.classList.remove('active');
      // });
      event.target.classList.toggle('active');
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
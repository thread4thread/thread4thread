// PACKAGES
// import React, { useState, useEffect } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// COMPONENTS
// View Listings
import { ListsAllTypes } from './components/view-listings/lists-all-types';
import { ListsTypeX } from './components/view-listings/lists-type-X';
import { SearchFilter } from './components/view-listings/search-filter';
import { ListDetails } from './components/view-listings/list-details';

function App() {
  return (
    <>

    {/* <!-- Page Content --> */}
    <main>
        <>
            <ListsAllTypes/>
            {/* <ListsTypeX/> */}
            {/* <SearchFilter/> */}
            {/* <ListDetails/> */}
        </>
    </main>

    </>
  );
}

export default App;

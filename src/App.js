// PACKAGES
// import React, { useState, useEffect } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// COMPONENTS
// View Listings
import { ListsAllTypes } from './components/view-listings/lists-all-types';
import { SearchFilter } from './components/view-listings/search-filter';

function App() {
  return (
    <>

    {/* <!-- Page Content --> */}
    <main className="side-wrap box column">
        <>
            <ListsAllTypes/>
            {/* <SearchFilter/> */}
        </>
    </main>

    </>
  );
}

export default App;

// PACKAGES
// import React, { useState, useEffect } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// COMPONENTS
// View Listings
import { ListsAllTypes } from './components/browse/lists-all-types';
import { ListsTypeX } from './components/browse/lists-type-X';
import { SearchFilter } from './components/browse/search-filter';
import { ListDetails } from './components/browse/list-details';
// Create Listing
import { CreateList } from './components/post/create-list';
// list-published

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

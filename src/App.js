// PACKAGES
// import React, { useState, useEffect } from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// COMPONENTS
// Navbars
import { TopNav } from './components/navbar/topnav';
import { BotNav } from './components/navbar/botnav';
// Browsing
import { ListsAllTypes } from './components/browsing/lists-all-types';
import { ListsTypeX } from './components/browsing/lists-type-X';
import { SearchFilter } from './components/browsing/search-filter';
import { ListDetails } from './components/browsing/list-details';
// Posting
import { CreateList } from './components/posting/create-list';
// list-published

function App() {
  return (
    <>

    {/* Top nav bar */}
    <TopNav/>

    {/* <!-- Main content --> */}
    <main>
        <>
          {/* <ListsAllTypes/> */}
          {/* <ListsTypeX/> */}
          {/* <SearchFilter/> */}
          <ListDetails/>
        </>
    </main>

    {/* Bottom nav bar */}
    <BotNav/>

    </>
  );
}

export default App;

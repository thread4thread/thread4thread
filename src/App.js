// APP - Contains all code

// PACKAGES
// import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// COMPONENTS
// Navbars
import { TopNav } from './components/navbar/top-nav';
import { BotNav } from './components/navbar/bot-nav';
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
      <Routes>
        <Route path="/" element={<ListsAllTypes/>}/>
        {/* <Route path="/lists-type-x" element={<ListsTypeX/>}/> */}
        {/* <SearchFilter/> */}
        {/* <ListDetails/> */}
      </Routes>
    </main>

    {/* Bottom nav bar */}
    <BotNav/>

    </>
  );
}

export default App;

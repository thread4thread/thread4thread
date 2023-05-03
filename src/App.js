// APP - Contains all code

// PACKAGES
// import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth";

// COMPONENTS
// Navbars
import { TopNav } from './components/navbar/top-nav';
import { BotNav } from './components/navbar/bot-nav';
// Account
import { SignUp } from './components/account/sign-up';
// Browsing
import { Welcome } from './components/account/welcome';
import { ListsAllTypes } from './components/browsing/lists-all-types';
import { ListsTypeX } from './components/browsing/lists-type-X';
import { SearchFilter } from './components/browsing/search-filter';
import { ListingDetails } from './components/browsing/list-details';
import { CreateList } from './components/posting/create-list';
import { LogIn } from './components/account/login';
import { Profile } from './components/account/my-profile';
// import {LogOutModal} from './components/account/logout';
import { UserProfile } from './components/profile/user-profile';




// Posting
// import { CreateList } from './components/posting/create-list';
// list-published

function App(props) {
  const [user, loading] = useAuthState(getAuth());
  const currentUser = user;



    
    /*const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })*/


    /*onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });*/


    //make sure the user stays logged in when using the website
    //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);


  //const [user, loading] = useAuthState(getAuth());
  

  return (
    <>

    {/* TODO: Conditionally show top nav bar */}
    <TopNav/>

    {/* <!-- Main content --> */}
    <main>
      {/* <SignUp/> */}
      <Routes>
        {/* TODO: Only 1 path to home */}
        <Route path="/thread4thread" element={<ListsAllTypes/>}/>
        <Route path="/" element={<ListsAllTypes/>}/>

        <Route path="/sign-up" element={<SignUp/>}/>

        <Route path='/welcome' element={<Welcome/>}/>

        <Route path='/lists-all-types' element={<ListsAllTypes />} />

        <Route path="/lists-type-x" element={<ListsTypeX/>}/>

        <Route path="/search-filter" element={<SearchFilter/>}/>

        <Route path="/list-details" element={<ListingDetails/>}/>

        <Route path='/create-list' element={<CreateList/>}/>

        <Route path='/my-profile' element={<UserProfile/>} />

        <Route path='/login' element={<LogIn user={currentUser}/>}/>

        <Route path='/my-profile' element={<Profile user={currentUser}/>} />

        {/* <Route path='/logout' element={<LogOutModal/>}/> */}


      </Routes>
    </main>

    {/* TODO: Conditionally show bot nav bar */}
    <BotNav/>

    </>
  );
}

export default App;
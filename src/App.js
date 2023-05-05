// APP - Contains all code

// PACKAGES
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// import { useAuthState } from "react-firebase-hooks/auth";

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
<<<<<<< HEAD
=======
import { Profile } from './components/account/my-profile';


>>>>>>> a4cecf555eecdbb89553c21a7633d28e5490c435
// import {LogOutModal} from './components/account/logout';
import { UserProfile } from './components/profile/user-profile';

//login
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth as configGetAuth} from './components/account/f-config';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';






// Posting
// import { CreateList } from './components/posting/create-list';
// list-published

export default function App(props) {

<<<<<<< HEAD
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

        <Route path='/login' element={<LogIn/>}/>

        {/* <Route path='/logout' element={<LogOutModal/>}/> */}
=======
      // Start up user authentication
      const [user, loading] = useAuthState(configGetAuth);
      const currentUser = user;
      //console.log(currentUser);
      // Access database
      //const db = getDatabase();
      // useState to keep track of clothes
      // const [allClothes, setAllClothes] = useState([]);
      // For spinner
      // const [isLoading, setIsLoading] = useState(false);
  
      // Sets the clothes to all clothes data found in database
      // useEffect(() => {
      //     setIsLoading(true);
      //     const allItemsRef = ref(db, "allItems");
      //     const offFunction = onValue(allItemsRef, (snapshot) => {
      //         const allClothesObj = snapshot.val()
      //         const arrayOfKeys = Object.keys(allClothesObj);
      //         const allClothesArray = arrayOfKeys.map((keyString) => {
      //             const whichItem = allClothesObj[keyString];
      //             whichItem.firebaseKey = keyString;
      //             return whichItem;
      //         })
      //         setAllClothes(allClothesArray);
      //         setIsLoading(false);
      //     })
      //     function cleanup() {
      //         offFunction();
      //     }
      //     return cleanup;
      // }, [db])
  
      // Dealing with log out modal
      const [showLogOut, setShowLogOut] = useState(false);
>>>>>>> a4cecf555eecdbb89553c21a7633d28e5490c435



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
    )
    }


// export default App;
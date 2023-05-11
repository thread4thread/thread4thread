// APP - Contains all code

// PACKAGES
import React from 'react';
import { Routes, Route, Router, Outlet } from 'react-router-dom';

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
import { Profile } from './components/account/my-profile';


// import {LogOutModal} from './components/account/logout';
import { UserProfile } from './components/profile/user-profile';

//login
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth as configGetAuth} from './components/account/f-config';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { Switch } from '@mui/material';
import { HamburgerMenu } from './components/account/logout';
import { FilteredResults } from './components/browsing/filtered-results';






// Posting
// import { CreateList } from './components/posting/create-list';
// list-published

export default function App(props) {

      // Start up user authentication
      const [user, loading] = useAuthState(configGetAuth);
      const currentUser = user;
      console.log(currentUser);
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

      function RequireAuth(props) {
        //setUserIsLoggedIn(currentUser != null);
        if (currentUser == null) { //if no user, send to sign in
          // console.log("No user signed in");
          return <Welcome />;
        }
        else { //otherwise, show the child route content
          // console.log(currentUser, " is signed in");
          return <Outlet />
        }
      }
    



    return (

      <>
        <Routes>
          <Route path='/welcome' element={<Welcome/>}/>
          <Route path='/login' element={<LogIn user={currentUser}/>}/>
        </Routes>

        <>
          <TopNav/>
          <main>
            <Routes element={<RequireAuth/>}>
              <Route path="/thread4thread" element={<ListsAllTypes/>}/>
              <Route path="/" element={<ListsAllTypes/>}/>  
              <Route path='/lists-all-types' element={<ListsAllTypes />} />
              <Route path="/lists-type-x" element={<ListsTypeX/>}/>
              <Route path="/search-filter" element={<SearchFilter/>}/>
              <Route path="/list-details" element={<ListingDetails/>}/>
              <Route path='/create-list' element={<CreateList user={currentUser}/>}/>
              <Route path='/my-profile' element={<UserProfile user={currentUser}/>} />
              <Route path='/logout' element={<HamburgerMenu/>}/>
              <Route path='/results' element={<FilteredResults/>}/>
            </Routes> 
          </main>

          <BotNav/>
        </>
        
      </>
    )

    // const LoginContainer = () => (
    //   <div className="container">
    //     <Route exact path="/" render={() => <Redirect to="/welcome" />} />
    //     <Route path="/login" component={Login} />
    //   </div>
    // )






    // return (
    //   <>

    //   {/* TODO: Conditionally show top nav bar */}
    //   <TopNav/>
  
    //   {/* <!-- Main content --> */}
    //   <main>
    //     {/* <SignUp/> */}
    //     <Routes>
    //       {/* TODO: Only 1 path to home */}
    //       <Route path="/thread4thread" element={<ListsAllTypes/>}/>
    //       <Route path="/" element={<ListsAllTypes/>}/>
  
    //       <Route path="/sign-up" element={<SignUp/>}/>
  
    //       <Route path='/welcome' element={<Welcome/>}/>
  
    //       <Route path='/lists-all-types' element={<ListsAllTypes />} />
  
    //       <Route path="/lists-type-x" element={<ListsTypeX/>}/>
  
    //       <Route path="/search-filter" element={<SearchFilter/>}/>
  
    //       <Route path="/list-details" element={<ListingDetails/>}/>
  
    //       <Route path='/create-list' element={<CreateList/>}/>
  
    //       <Route path='/login' element={<LogIn user={currentUser}/>}/>

    //       <Route path='/my-profile' element={<UserProfile user={currentUser}/>} />
  
  
    //       {/* <Route path='/my-profile' element={<Profile user={currentUser}/>} /> */}
  
    //       {/* <Route path='/logout' element={<LogOutModal/>}/> */}
  
  
    //     </Routes>
    //   </main>
  
    //   {/* TODO: Conditionally show bot nav bar */}
    //   <BotNav/>
  
    //   </>
    // )
    }


// export default App;
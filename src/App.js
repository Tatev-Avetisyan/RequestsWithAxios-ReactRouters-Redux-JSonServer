import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import AddUserPage from "./Components/AddUser/addUserPage";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

import StartPage from "./Components/Start page/StartPage";
import Users from "./Components/Users/Users";
import UsersDetails from "./Components/usersDetails/UsersDetails";


function App() {
  return (
    <div>
      {/* <StartPage/> */}
      <main>
        <Routes>

          <Route path = "/" element={<Navigate replace to='/start-page'/>}/>
          <Route path = "/users" element={<Navigate replace to='/users/page/1'/>}/>
          <Route path = "/start-page" element={<StartPage/>}/>
          {/* <Route path = "/users" element={<Users/>}/> */}
          <Route path = "/users/:userId" element = {<UsersDetails/>}/>
          <Route path = "/users/page/:number" element = {<Users/>}/>
          <Route path = "/add-user" element = {<AddUserPage/>}/>
          <Route path = "*" element = {<PageNotFound/>}/>

             

         
          
        </Routes>
        </main>
    </div>
  )
}

export default App
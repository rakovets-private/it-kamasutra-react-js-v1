import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <main className={"app-wrapper"}>
      <HeaderContainer/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/profile/*' element={<ProfileContainer/>}/>
          <Route path='/dialogs/*' element={<DialogsContainer/>}/>
          <Route path='/users' element={<UsersContainer/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </main>
  );
}

export default App;

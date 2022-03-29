import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <main className={"app-wrapper"}>
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/profile/*' element={<ProfileContainer/>}/>
          <Route path='/dialogs/*' element={<DialogsContainer/>}/>
          <Route path='/users' element={<UsersContainer/>}/>
        </Routes>
      </div>
    </main>
  );
}

export default App;

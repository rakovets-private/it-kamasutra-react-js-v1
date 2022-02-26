import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs'
import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <main className={"app-wrapper"}>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile posts={props.storage.posts}/>}/>
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.storage.dialogs} messages={props.storage.messages}/>}/>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;

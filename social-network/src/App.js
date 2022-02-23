import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <main className={"app-wrapper"}>
        <Header/>
        <Navbar/>
        <div class="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/dialogs' element={<Dialogs/>}/>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;

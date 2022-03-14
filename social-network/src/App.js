import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import './App.css';

const App = (props) => {
  return (
    <main className={"app-wrapper"}>
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/profile' element={<Profile store={props.store}/>}/>
          <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
        </Routes>
      </div>
    </main>
  );
}

export default App;

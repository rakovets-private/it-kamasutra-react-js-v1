import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeThunkCreator} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunkCreator();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, {initializeThunkCreator})(App);

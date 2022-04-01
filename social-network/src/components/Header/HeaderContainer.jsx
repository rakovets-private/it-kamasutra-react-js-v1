import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {setAuthUserDataThunkCreator} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthUserDataThunkCreator();
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {setAuthUserDataThunkCreator})(HeaderContainer);

import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {setAuthUserData} from '../../redux/auth-reducer';
import {auth} from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    auth()
      .then(response => {
        this.props.setAuthUserData({...response.data.data, isAuth: true});
      })
      .catch(
        reason => {
          console.log(reason);
        }
      )
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);

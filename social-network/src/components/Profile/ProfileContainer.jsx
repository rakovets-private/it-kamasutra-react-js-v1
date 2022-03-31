import React from "react";
import {connect} from 'react-redux';
import {useMatch} from 'react-router-dom';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader';
import {setUserProfile} from '../../redux/profile-reducer';
import {getProfile} from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    getProfile(this.props.match ? this.props.match.params.userId : 2)
      .then(response => {
        this.props.setUserProfile(response.data);
        console.log(response);
      })
      .catch(
        reason => {
          console.log(reason);
        }
      )
  }

  render() {
    return (<>
      {this.props.isFetching
        ? <Preloader
          isFetching={this.props.isFetching}
        />
        : <Profile {...this.props} />}
    </>);
  }
}

const withRouter = (Component) => {
  return (props) => {
    const match = useMatch('/profile/:userId/');
    return <Component {...props} match={match}/>;
  };
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    isFetching: state.profilePage.isFetching,
  };
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);

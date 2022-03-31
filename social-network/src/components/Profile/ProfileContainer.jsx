import React from "react";
import Profile from './Profile';
import {connect} from 'react-redux';
import axios from 'axios';
import {setUserProfile} from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import {useMatch} from 'react-router-dom';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match ? this.props.match.params.userId : 2}`)
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

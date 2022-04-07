import React from "react";
import {connect} from 'react-redux';
import {compose} from 'redux';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader';
import {
  getUserStatusTrunkCreator,
  setUserProfileTrunkCreator,
  setUserStatusTrunkCreator
} from '../../redux/profile-reducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import withRouter from '../../hoc/withRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : 2;
    this.props.setUserProfileTrunkCreator(userId);
    this.props.getUserStatusTrunkCreator(userId);
  }

  render() {
    return (<>
      {this.props.isFetching
        ? <Preloader isFetching={this.props.isFetching}/>
        : <Profile {...this.props} />}
    </>);
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    isFetching: state.profilePage.isFetching,
    userStatus: state.profilePage.userStatus,
  };
}

export default compose(
  connect(mapStateToProps, {setUserProfileTrunkCreator, getUserStatusTrunkCreator, setUserStatusTrunkCreator}),
  withAuthRedirect,
  withRouter
)(ProfileContainer)

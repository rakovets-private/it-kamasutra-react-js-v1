import React from "react";
import {connect} from 'react-redux';
import {compose} from 'redux';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader';
import {setUserProfileTrunkCreator} from '../../redux/profile-reducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import withRouter from '../../hoc/withRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfileTrunkCreator(this.props.match ? this.props.match.params.userId : 2)
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
  };
}

export default compose(
  connect(mapStateToProps, {setUserProfileTrunkCreator}),
  withAuthRedirect,
  withRouter
)(ProfileContainer)

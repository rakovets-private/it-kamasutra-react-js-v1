import React from "react";
import {connect} from 'react-redux';
import {useMatch} from 'react-router-dom';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader';
import {setUserProfileTrunkCreator} from '../../redux/profile-reducer';

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

export default connect(mapStateToProps, {setUserProfileTrunkCreator})(WithUrlDataContainerComponent);

import React from 'react';
import {useMatch} from 'react-router-dom';

const withRouter = (Component) => {
  return (props) => {
    const match = useMatch('/profile/:userId/');
    return <Component {...props} match={match}/>;
  };
}

export default withRouter;

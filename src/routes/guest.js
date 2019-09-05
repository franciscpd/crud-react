import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const GuestRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (true ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

GuestRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default GuestRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {


  return (
    <Route 
      {...rest} 
      render={(props) => {
        //if user is authenticated, render the given component
        if (window.localStorage.getItem("token")) {
          // user is logged in and renders
          return <Component {...props} {...rest} />;
        } else {
          return <Redirect to='/login' />
        }
      }}
    />
  )
};

export default PrivateRoute;
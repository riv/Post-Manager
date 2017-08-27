import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, status}) => (
  <Route path={path} render={(props) => (
    status !== 'connected' ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/dashboard" />
    )
  )}/>
);

const Protected = ({component: Component, path, status}) => (
  <Route path={path} render={(props) => (
      status === 'connected' ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}/>
);

const mapStateToProps = (store) => ({
  status: store.login.status.status
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

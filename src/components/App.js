import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import LoginContainer from './login/login_container';
import DashboardContainer from './dashboard/dashboard_container';
import Codepen from './codepen';

import { ProtectedRoute, AuthRoute } from '../util/route_util';

import Error404 from './error404';
import './App.css';

class App extends React.Component {

  render() {
    return(
      <div className="App">
        <Switch>
          <ProtectedRoute path="/dashboard" component={DashboardContainer}/>
          <Route path="/codepen" component={Codepen}/>
          <AuthRoute path="/" component={LoginContainer}/>
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;

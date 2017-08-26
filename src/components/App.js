import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import LoginContainer from './login/login_container';

import Error404 from './error404';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginContainer}/>
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Button } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.checkLoginState = this.checkLoginState.bind(this);
    this.login = this.login.bind(this);
  }

  checkLoginState() {
    this.props.getLoginStatus();
  }

  login () {
    window.FB.login(this.checkLoginState);
  }

  render () {
    return (
      <div>
        <Button onClick={this.login}>
          LOGIN INTO FACEBOOK
        </Button>
      </div>
    );
  }
}

export default Login;

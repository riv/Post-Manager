import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.props.getLoginStatus();
  }

  render () {
    return (
      <div>Example Component Goes here!</div>
    );
  }
}

export default Login;

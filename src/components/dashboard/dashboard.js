import React from 'react';
import { Button } from 'react-bootstrap';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render () {
    return(
      <div>
        <p>This is where the dashboard should go!</p>
        <Button onClick={this.logout}>
          Logout
        </Button>
      </div>
    );
  }
}

export default Dashboard;

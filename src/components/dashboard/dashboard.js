import React from 'react';
import { Button } from 'react-bootstrap';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.loadPageData = this.loadPageData.bind(this);

    //render functions
    this.renderSelectPage = this.renderSelectPage.bind(this);
  }

  componentDidMount() {
    this.props.getPages(this.props.userAccessToken);
  }

  logout() {
    this.props.logout();
  }

  loadPageData(page) {
    const { id, access_token} = page;
    return () => {
      this.props.getPage(id, access_token);
      this.props.getPageFeed(id, access_token);
    };
  }

  renderSelectPage() {
    const { pages } = this.props;
    return(
      <div>
        {pages !== [] ? pages.map((page) =>
          <Button key={page.id}
                  onClick={this.loadPageData(page)}>{`${page.name}`}
          </Button>) : <p>You have no pages, please create a page</p>}
      </div>
    );
  }

  render () {
    return(
      <div>
        <h1>Dashboard</h1>
        <Button onClick={this.logout}>
          Logout
        </Button>
        {this.renderSelectPage()}
      </div>
    );
  }
}

export default Dashboard;

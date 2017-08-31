import React from 'react';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';
import Feed from './feed';
import Unpublished from './unpublishedPosts';
import PostCreator from './post_creator';
import './dashboard.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.loadPageData = this.loadPageData.bind(this);

    //render functions
    this.renderSelectPage = this.renderSelectPage.bind(this);
    this.renderNav = this.renderNav.bind(this);
    this.state = {
      selected: 'published'
    }
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
      this.props.getUnpublishedPosts(id, access_token);
    };
  }

  renderSelectPage() {
    const { pages } = this.props;
    return(
      <DropdownButton className="pageSelector" disabled={ !pages ? true : false} bsStyle={'default'} title={'Your Pages'} id={`dropdown-basic-0`}>
        {
          pages.map((page) =>
          <MenuItem key={page.id}
             onClick={this.loadPageData(page)}>{`${page.name}`}
          </MenuItem>
          )
        }
      </DropdownButton>
    );
  }

  renderNav() {
    return (
      <nav>
        <div className="nav-title">
          <h2>Dashboard</h2>
        </div>
        <div className="nav-right">
          {this.renderSelectPage()}
          <Button className="logoutButton" onClick={this.logout}>
            Logout
          </Button>
        </div>
      </nav>
    );
  }

  updateSelected (type) {
    return () => {
      this.setState({selected: type});
    };
  }

  render () {
    return(
      <div>
        {this.renderNav()}
        <div className="mainContentContainer">
          <div className="postViewer">
            <nav>
              <h2 className={this.state.selected === 'published' ? 'modeOn modeSelector' : 'modeSelector'} onClick={this.updateSelected('published')}>Published</h2>
              <h2 className={this.state.selected === 'scheduled' ? 'modeOn modeSelector' : 'modeSelector'} onClick={this.updateSelected('scheduled')}>Scheduled</h2>
            </nav>
            <div className="postsContainer">
              {this.state.selected === 'published' ? <Feed/> : <Unpublished/>}
            </div>
          </div>
          <PostCreator/>
        </div>
      </div>
    );
  }
}

export default Dashboard;

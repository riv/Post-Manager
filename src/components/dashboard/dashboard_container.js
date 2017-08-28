import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { getLoginStatus, logout } from '../../actions/login_actions';
import { getPages,
         getPage,
         getPageFeed,
         getUnpublishedPosts } from '../../actions/dashboard_actions';


const mapStateToProps = (store) => ({
  pages: store.dashboard.pages,
  userAccessToken: store.login.status.authResponse.accessToken
});

const mapDispatchToProps = (dispatch) => ({
  getLoginStatus: () => dispatch(getLoginStatus()),
  getPage: (id, at) => dispatch(getPage(id, at)),
  getPageFeed: (id, at) => dispatch(getPageFeed(id, at)),
  getUnpublishedPosts: (id, at) => dispatch(getUnpublishedPosts(id,at)),
  getPages: (at) => dispatch(getPages(at)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

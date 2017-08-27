import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { getLoginStatus, logout } from '../../actions/login_actions';


const mapStateToProps = (store) => ({});

const mapDispatchToProps = (dispatch) => ({
  getLoginStatus: () => dispatch(getLoginStatus()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

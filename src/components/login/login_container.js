import Login from './login';
import { connect } from 'react-redux';
import { getLoginStatus } from '../../actions/login_actions';

const mapStateToProps = (store) => ({
});

const mapDispatchToProps = (dispatch, store) => ({
  getLoginStatus: () => dispatch(getLoginStatus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

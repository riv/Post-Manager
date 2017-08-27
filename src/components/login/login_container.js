import Login from './login';
import { connect } from 'react-redux';
import { movieSearch, getLoginStatus } from '../../actions/login_actions';

const mapStateToProps = (store) => ({
  movies: store.login.movies
});

const mapDispatchToProps = dispatch => ({
  getLoginStatus: () => dispatch(getLoginStatus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

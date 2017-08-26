import Login from './login';
import { connect } from 'react-redux';
import { movieSearch } from '../../actions/login_actions';

const mapStateToProps = ({ example }) => ({
  movies: example.movies
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

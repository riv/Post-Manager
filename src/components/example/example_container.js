import Example from './example';
import { connect } from 'react-redux';
import { movieSearch } from '../../actions/example_actions';

const mapStateToProps = ({ example }) => ({
  movies: example.movies
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);

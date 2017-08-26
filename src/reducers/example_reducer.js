import { RECEIVE_MOVIES } from '../actions/example_actions'

const _default = {
  movies: []
}

const ExampleReducer = (state = _default, action) => {
  Object.freeze(state);
  const copy = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_MOVIES:
      copy.movies = action.movies;
      return copy;
    default:
      return state;
  };
};

export default ExampleReducer;

import { RECEIVE_MOVIES, RECEIVE_LOGIN_STATUS } from '../actions/constants'

const _default = {
  movies: [],
  status: {}
}

const LoginReducer = (state = _default, action) => {
  Object.freeze(state);
  const copy = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_MOVIES:
      copy.movies = action.movies;
      return copy;
    case RECEIVE_LOGIN_STATUS:
      copy.status = action.status;
      return copy
    default:
      return state;
  };
};

export default LoginReducer;

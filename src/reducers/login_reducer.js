import * as constants from '../actions/constants'

const _default = {
  movies: [],
  status: {}
}

const LoginReducer = (state = _default, action) => {
  Object.freeze(state);
  const copy = Object.assign({}, state);
  switch(action.type) {
    case constants.RECEIVE_LOGIN_STATUS:
      copy.status = action.status;
      return copy;
    case constants.LOGOUT:
      copy.status = {status: ''};
      return copy;
    default:
      return state;
  };
};

export default LoginReducer;

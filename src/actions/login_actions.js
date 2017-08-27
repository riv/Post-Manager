import * as APILoginUtil from '../util/login_utils'
import * as constants from './constants';

export const receiveMovies = movies => ({
  type: constants.RECEIVE_MOVIES,
  movies
});

export const receiveLoginStatus = status => ({
  type: constants.RECEIVE_LOGIN_STATUS,
  status
});

export const logout = () => ({
  type: constants.LOGOUT,
  data: null
});

export const movieSearch = queryString => dispatch => (
  APILoginUtil.movieSearch(queryString).then(
    resp => dispatch(receiveMovies(resp.results))
  )
);

export const getLoginStatus = () => dispatch => {
  window.FB.getLoginStatus(response => {
    dispatch(receiveLoginStatus(response));
  })
};

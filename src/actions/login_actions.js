import * as APILoginUtil from '../util/login_utils'
import { RECEIVE_MOVIES, RECEIVE_LOGIN_STATUS } from './constants';

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const receiveLoginStatus = status => ({
  type: RECEIVE_LOGIN_STATUS,
  status
})

export const movieSearch = queryString => dispatch => (
  APILoginUtil.movieSearch(queryString).then(
    resp => dispatch(receiveMovies(resp.results))
  )
);

export const getLoginStatus = () => dispatch => {
  console.log(window.FB);
  window.FB.getLoginStatus(response => {
    console.log(response);
    dispatch(receiveLoginStatus(response));
  })
};

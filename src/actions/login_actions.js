import * as APILoginUtil from '../util/login_utils'

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const movieSearch = queryString => dispatch => (
  APILoginUtil.movieSearch(queryString).then(
    resp => dispatch(receiveMovies(resp.results))
  )
);

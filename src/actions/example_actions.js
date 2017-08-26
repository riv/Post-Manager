import * as APIExampleUtil from '../util/example_util'

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const movieSearch = queryString => dispatch => (
  APIExampleUtil.movieSearch(queryString).then(
    resp => dispatch(receiveMovies(resp.results))
  )
);

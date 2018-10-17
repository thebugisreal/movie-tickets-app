import { FETCH_MOVIES } from './types';

export const fetchMovies = () => dispatch => {
  fetch('/api/movies')
    .then(res => res.json())
    .then(movies => dispatch({
      type: FETCH_MOVIES,
      payload: movies
    }));
}
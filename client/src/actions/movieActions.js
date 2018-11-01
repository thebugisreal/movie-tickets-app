import { FETCH_MOVIES, CHOOSE_MOVIE, CHOOSE_CINEMA, CHOOSE_DATE, CHOOSE_TIME } from './types';

export const fetchMovies = () => dispatch => {
  fetch('/api/movies')
    .then(res => res.json())
    .then(movies => dispatch({
      type: FETCH_MOVIES,
      payload: movies
    }));
}

export const chooseMovie = (movie) => dispatch => {
  dispatch({
    type: CHOOSE_MOVIE,
    payload: movie
  })
}

export const chooseCinema = (cinema) => dispatch => {
  dispatch({
    type: CHOOSE_CINEMA,
    payload: cinema
  })
}

export const chooseDate = (date) => dispatch => {
  dispatch({
    type: CHOOSE_DATE,
    payload: date
  })
}

export const chooseTime = (time) => dispatch => {
  dispatch({
    type: CHOOSE_TIME,
    payload: time
  })
}
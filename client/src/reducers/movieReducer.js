import { FETCH_MOVIES, CHOOSE_MOVIE, CHOOSE_CINEMA, CHOOSE_DATE, CHOOSE_TIME, RESET_BOOKING } from '../actions/types';

const initialState = {
  items: [],
  booking: {
    movie: '',
    listMovie: [],
    cinema: '',
    listCinema: [],
    date: '',
    listDate: [],
    time: '',
    listTime: []
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_MOVIES:
      const listMovie = action.payload.map(item => item.name); // [movie name 1, movie name 2,...]
      return {
        items: action.payload,
        booking: {
          ...state.booking,
          movie: '',
          listMovie
        }
      }
    case CHOOSE_MOVIE:
      const listCinema = state.items.filter(item => item.name === action.payload)[0].cinema.map(item => item.name); // [cinema name 1, cinema name 2,...]
      return {
        ...state,
        booking: {
          ...state.booking,
          movie: action.payload,
          cinema: '',
          listCinema,
          date: '',
          listDate: [],
          time: '',
          listTime: []
        }
      }
    case CHOOSE_CINEMA:
      const filterMovie = state.items.filter(item => item.name === state.booking.movie)[0];
      const listDate = filterMovie.cinema.filter(item => item.name === action.payload)[0].info.map(item => item.date); // [date 1, date 2,...]
      return {
        ...state,
        booking: {
          ...state.booking,
          cinema: action.payload,
          date: '',
          listDate,
          time: '',
          listTime: []
        }
      }
    case CHOOSE_DATE:
      const filterMovie2 = state.items.filter(item => item.name === state.booking.movie)[0];
      const filterCinema = filterMovie2.cinema.filter(item => item.name === state.booking.cinema)[0];
      const listTime = filterCinema.info.filter(item => item.date === action.payload)[0].times.map(item => item.time); // [time 1, time 2,...]
      return {
        ...state,
        booking: {
          ...state.booking,
          date: action.payload,
          time: '',
          listTime
        }
      }
    case CHOOSE_TIME:
      return {
        ...state,
        booking: {
          ...state.booking,
          time: action.payload
        }
      }
    case RESET_BOOKING:
      return {
        ...state,
        booking: {
          ...state.booking,
          movie: '',
          cinema: '',
          listCinema: [],
          date: '',
          listDate: [],
          time: '',
          listTime: []
        }
      }
    default:
      return state;
  }
}
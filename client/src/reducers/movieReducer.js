import { FETCH_MOVIES, CHOOSE_MOVIE, CHOOSE_CINEMA, CHOOSE_DATE, CHOOSE_TIME, RESET_BOOKING } from '../actions/types';

const initialState = {
  items: [],
  item: null,
  slug: '',
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
        ...state,
        items: action.payload,
        booking: {
          ...state.booking,
          movie: '',
          listMovie
        }
      }
    case CHOOSE_MOVIE:
      const item = state.items.filter(item => item.name === action.payload)[0];
      const slug = item.slug;
      const listCinema = item.cinema.map(item => item.name); // [cinema name 1, cinema name 2,...]
      return {
        ...state,
        item,
        slug,
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
      const listDate = state.item.cinema.filter(item => item.name === action.payload)[0].info.map(item => item.date); // [date 1, date 2,...]
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
      const filterCinema = state.item.cinema.filter(item => item.name === state.booking.cinema)[0];
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
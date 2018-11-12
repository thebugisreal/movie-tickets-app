import { FETCH_MOVIES, CHOOSE_MOVIE, CHOOSE_CINEMA, CHOOSE_DATE, CHOOSE_TIME, RESET_BOOKING } from '../actions/types';

const initialState = {
  items: [],
  booking: {
    listMovie: [],
    chooseMovie: null,
    listCinema: [],
    chooseCinema: null,
    listDate: [],
    chooseDate: null,
    listTime: [],
    chooseTime: null
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
          listMovie,
          chooseMovie: null
        }
      }
    case CHOOSE_MOVIE:
      const chooseMovie = state.items.filter(item => item.name === action.payload)[0];
      const listCinema = chooseMovie.cinema.map(item => item.name); // [cinema name 1, cinema name 2,...]
      return {
        ...state,
        booking: {
          ...state.booking,
          chooseMovie,
          listCinema,
          chooseCinema: null,
          listDate: [],
          chooseDate: null,
          listTime: [],
          chooseTime: null
        }
      }
    case CHOOSE_CINEMA:
      const chooseCinema = state.booking.chooseMovie.cinema.filter(item => item.name === action.payload)[0]
      const listDate = chooseCinema.info.map(item => item.date); // [date 1, date 2,...]
      return {
        ...state,
        booking: {
          ...state.booking,
          chooseCinema,
          listDate,
          chooseDate: null,
          listTime: [],
          chooseTime: null
        }
      }
    case CHOOSE_DATE:
      const chooseDate = state.booking.chooseCinema.info.filter(item => item.date === action.payload)[0];
      const listTime = chooseDate.ticket.map(item => item.time); // [time 1, time 2,...]
      return {
        ...state,
        booking: {
          ...state.booking,
          chooseDate,
          listTime,
          time: null
        }
      }
    case CHOOSE_TIME:
      const chooseTime = state.booking.chooseDate.ticket.filter(item => item.time === action.payload)[0];
      return {
        ...state,
        booking: {
          ...state.booking,
          chooseTime
        }
      }
    case RESET_BOOKING:
      return {
        ...state,
        booking: {
          ...state.booking,
          chooseMovie: null,
          listCinema: [],
          chooseCinema: null,
          listDate: [],
          chooseDate: null,
          listTime: [],
          chooseTime: null
        }
      }
    default:
      return state;
  }
}
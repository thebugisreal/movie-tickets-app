import { 
  FETCH_MOVIES, 
  CHOOSE_MOVIE, 
  CHOOSE_CINEMA, 
  CHOOSE_DATE, 
  CHOOSE_TIME, 
  RESET_BOOKING,
  ADD_TICKET,
  SUBTRACT_TICKET,
  ADD_COMBO,
  SUBTRACT_COMBO,
  SHOW_TICKET,
  SHOW_SEAT,
  SHOW_PAYMENT,
  CHOOSE_SEAT,
  ADD_AMOUNT,
  CHECKOUT,
  MOVIE_LOADING
} from '../constants/movieTypes';

const initialState = {
  items: [],
  isLoading: false,
  booking: {
    tickets: 1,
    combo: 0,
    amount: 0,
    seat: null,
    chooseSeat: [],
    isShowTicket: true,
    isShowSeat: false,
    isShowPayment: false,
    listMovie: [],
    chooseMovie: null,
    listCinema: [],
    chooseCinema: null,
    listDate: [],
    chooseDate: null,
    listTime: [],
    chooseTime: null,
    hasCheckout: false
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
          chooseTime,
          seat: chooseTime.seat
        }
      }
    case ADD_TICKET:
      let addTickets = state.booking.tickets;
      if (addTickets < 4) { addTickets++ }
      return {
        ...state,
        booking: {
          ...state.booking,
          tickets: addTickets
        }
      }
    case SUBTRACT_TICKET:
      let subTickets = state.booking.tickets;
      if (subTickets > 1) { subTickets-- }
      return {
        ...state,
        booking: {
          ...state.booking,
          tickets: subTickets
        }
      }
    case ADD_COMBO:
      let addCombo = state.booking.combo;
      if (addCombo < 10) { addCombo++ }
      return {
        ...state,
        booking: {
          ...state.booking,
          combo: addCombo
        }
      }
    case SUBTRACT_COMBO:
      let subCombo = state.booking.combo;
      if (subCombo > 0) { subCombo-- }
      return {
        ...state,
        booking: {
          ...state.booking,
          combo: subCombo
        }
      }
    case SHOW_TICKET:
      return {
        ...state,
        booking: {
          ...state.booking,
          isShowTicket: true,
          isShowSeat: false,
          isShowPayment: false
        }
      }
    case SHOW_SEAT:
      return {
        ...state,
        booking: {
          ...state.booking,
          isShowSeat: true,
          isShowTicket: false,
          isShowPayment: false
        }
      }
    case SHOW_PAYMENT:
      return {
        ...state,
        booking: {
          ...state.booking,
          isShowPayment: true,
          isShowTicket: false,
          isShowSeat: false
        }
      }
    case CHOOSE_SEAT:
      const getSeat = [...state.booking.chooseSeat];
      if(!getSeat.includes(action.payload) && getSeat.length < state.booking.tickets) {
        getSeat.push(action.payload)
      } else if(getSeat.includes(action.payload)) {
        const index = getSeat.indexOf(action.payload);
        getSeat.splice(index, 1);
      }
      return {
        ...state,
        booking: {
          ...state.booking,
          chooseSeat: getSeat
        }
      }
    case ADD_AMOUNT:
      return {
        ...state,
        booking: {
          ...state.booking,
          amount: action.payload
        }
      }
    case CHECKOUT:
      if(action.payload.success) {
        return {
          ...state,
          isLoading: false,
          booking: {
            ...state.booking,
            hasCheckout: true
          }
        }
      }
      break;
    case MOVIE_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case RESET_BOOKING:
      return {
        ...state,
        booking: {
          ...state.booking,
          tickets: 1,
          combo: 0,
          amount: 0,
          seat: null,
          chooseSeat: [],
          isShowTicket: true,
          isShowSeat: false,
          isShowPayment: false,
          chooseMovie: null,
          listCinema: [],
          chooseCinema: null,
          listDate: [],
          chooseDate: null,
          listTime: [],
          chooseTime: null,
          hasCheckout: false
        }
      }
    default:
      return state;
  }
}
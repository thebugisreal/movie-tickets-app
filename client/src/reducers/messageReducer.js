import { ERROR_MS, CLOSE_MS } from '../constants/messageTypes';

const initialState = {
  errorMessage: '',
  isShowError: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ERROR_MS:
    return {
      ...state,
      errorMessage: action.payload,
      isShowError: true
    }
    case CLOSE_MS:
    return {
      ...state,
      errorMessage: '',
      isShowError: false
    }
    default:
      return state;
  }
}
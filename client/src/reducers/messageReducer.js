import { SHOW_MS, CLOSE_MS } from '../constants/messageTypes';

const initialState = {
  message: '',
  type: null,
  isShowMessage: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SHOW_MS:
    return {
      ...state,
      message: action.payload.message,
      type: action.payload.type,
      isShowMessage: true
    }
    case CLOSE_MS:
    return {
      ...state,
      isShowMessage: false
    }
    default:
      return state;
  }
}
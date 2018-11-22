import { SHOW_MS, CLOSE_MS } from '../constants/messageTypes';

export const showMessage = content => dispatch => {
  dispatch({
    type: SHOW_MS,
    payload: content
  })
}

export const closeMessage = () => dispatch => {
  dispatch({
    type: CLOSE_MS
  })
}
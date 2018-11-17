import { ERROR_MS, CLOSE_MS } from '../constants/messageTypes';

export const errorMessage = content => dispatch => {
  dispatch({
    type: ERROR_MS,
    payload: content
  })
}

export const closeMessage = () => dispatch => {
  dispatch({
    type: CLOSE_MS
  })
}
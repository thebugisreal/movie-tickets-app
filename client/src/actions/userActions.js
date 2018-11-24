import { LOGIN, SIGNUP, TOGGLE_MENU, LOADING, RESET } from '../constants/userTypes';

export const login = data => dispatch => {
  fetch('api/users/login', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
    body: data
  })
    .then(res => res.json())
    .then(result => dispatch({
      type: LOGIN,
      payload: result
    }));
}

export const signup = data => dispatch => {
  fetch('api/users/sign-up', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
    body: data
  })
    .then(res => res.json())
    .then(result => dispatch({
      type: SIGNUP,
      payload: result
    }));
}

export const toggleMenu = () => dispatch => {
  dispatch({
    type: TOGGLE_MENU
  })
}

export const loading = () => dispatch => {
  dispatch({
    type: LOADING
  })
}

export const reset = () => dispatch => {
  dispatch({
    type: RESET
  })
}
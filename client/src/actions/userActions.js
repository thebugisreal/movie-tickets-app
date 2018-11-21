import { LOGIN, SIGNUP, TOGGLE_NAV_MENU } from '../constants/userTypes';

export const login = data => dispatch => {
  fetch('http://localhost:5000/api/users/login', {
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
  fetch('http://localhost:5000/api/users/sign-up', {
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

export const toggleNavMenu = () => dispatch => {
  dispatch({
    type: TOGGLE_NAV_MENU
  })
}
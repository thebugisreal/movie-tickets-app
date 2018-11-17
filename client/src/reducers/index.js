import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import postReducer from './postReducer';
import userReducer from './userReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  movies: movieReducer,
  posts: postReducer,
  users: userReducer,
  message: messageReducer
});
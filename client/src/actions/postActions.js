import { FETCH_POSTS } from '../constants/postTypes';

export const fetchPosts = () => dispatch => {
  fetch('api/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }));
}
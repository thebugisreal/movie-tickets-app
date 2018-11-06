import React from 'react';
import Home from './components/Home';
import Movies from './components/Movies';
import Posts from './components/Posts';
import Post from './components/Posts/Post';
import NotFound from './components/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Home />
  },
  {
    path: '/movies',
    exact: false,
    main: () => <Movies />
  },
  {
    path: '/posts',
    exact: true,
    main: ({match}) => <Posts match={match} />
  },
  {
    path: '/posts/:slug',
    exact: false,
    main: ({match}) => <Post match={match} />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />
  }
]

export default routes;
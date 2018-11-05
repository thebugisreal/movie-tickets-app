import React from 'react';
import Home from './components/Home';
import Movies from './components/Movies';
import Posts from './components/Posts';
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
    exact: false,
    main: () => <Posts />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />
  }
]

export default routes;
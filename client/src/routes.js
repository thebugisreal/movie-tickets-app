import React from 'react';
import Home from './components/Home';
import Movies from './components/Movies';
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
    path: '',
    exact: false,
    main: () => <NotFound />
  }
]

export default routes;
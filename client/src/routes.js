import React from 'react';
import HomePage from './pages/HomePage';
import MovieListPage from './pages/MovieListPage';
import NewsListPage from './pages/NewsListPage';
import NewsPage from './pages/NewsPage';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />
  },
  {
    path: '/movies',
    exact: false,
    main: () => <MovieListPage />
  },
  {
    path: '/news',
    exact: true,
    main: ({match}) => <NewsListPage match={match} />
  },
  {
    path: '/news/:slug',
    exact: true,
    main: ({match}) => <NewsPage match={match} />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundPage />
  }
]

export default routes;
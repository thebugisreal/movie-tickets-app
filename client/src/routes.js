import React from 'react';
import HomePage from './pages/HomePage';
import MovieListPage from './pages/MovieListPage';
import MoviePage from './pages/MoviePage';
import NewsListPage from './pages/NewsListPage';
import NewsPage from './pages/NewsPage';
import NotFoundPage from './pages/NotFoundPage';
import BookingPage from './pages/BookingPage';
import CheckoutPage from './pages/CheckoutPage';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />
  },
  {
    path: '/movies',
    exact: true,
    main: ({match}) => <MovieListPage match={match} />
  },
  {
    path: '/movies/:slug',
    exact: true,
    main: ({match}) => <MoviePage match={match} />
  },
  {
    path: '/movies/:slug/booking',
    exact: true,
    main: ({match}) => <BookingPage match={match} />
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
    path: '/checkout',
    exact: true,
    main: () => <CheckoutPage />
  },
  {
    path: '',
    exact: true,
    main: () => <NotFoundPage />
  }
]

export default routes;
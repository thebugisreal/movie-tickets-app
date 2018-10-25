import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Slider from './components/Slider';
import Movie from './components/Movie';
import QuickBooking from './components/QuickBooking';
import Footer from './components/Footer';
// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faSearch, faAngleLeft, faFilm } from '@fortawesome/free-solid-svg-icons';
// add font icon to library
library.add(fab, faUser, faSearch, faAngleLeft, faFilm)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Slider />
          <Movie />
          <div style={{height: '1000px', background: 'black'}}></div>
          <QuickBooking />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

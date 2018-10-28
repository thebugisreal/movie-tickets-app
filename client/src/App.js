import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Slider from './components/Slider';
import Movie from './components/Movie';
import Banner from './components/Banner';
import News from './components/News';
import QuickBooking from './components/QuickBooking';
import Footer from './components/Footer';
// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faSearch, faAngleLeft, faFilm, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
// add font icon to library
library.add(fab, faUser, faSearch, faAngleLeft, faFilm, faTimes, faNewspaper)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="position-relative">
          <Header />
          <Slider />
          <Movie />
          <Banner url={"./static/banner/1.png"} title={"Download Now"}/>
          <News />
          <QuickBooking />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

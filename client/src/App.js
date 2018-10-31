import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
// import Slider from './components/Slider';
// import Movie from './components/Movie';
// import Banner from './components/Banner';
// import News from './components/News';
// import Promotion from './components/Promotion';
// import QuickBooking from './components/QuickBooking';

// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faUser, faSearch, faAngleLeft, faFilm, faTimes } from '@fortawesome/free-solid-svg-icons';
// add font icon to library
library.add(fab, far, faUser, faSearch, faAngleLeft, faFilm, faTimes, far)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="position-relative">
            <Header />
            {/* <Slider />
            <Movie />
            <Banner url={"./static/banner/1.png"} title={"Download Now"}/>
            <News />
            <Promotion />
            <QuickBooking /> */}
            <Footer />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;

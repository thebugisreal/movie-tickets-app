import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
// import Slider from './components/Slider';
import QuickBooking from './components/quick_booking/QuickBooking';
// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
// add font icon to library
library.add(fab, faUser, faSearch)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{height: '500px', background: 'black'}}></div>
        <QuickBooking />
        <Footer />
      </div>
    );
  }
}

export default App;

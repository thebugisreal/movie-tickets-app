import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
// layout
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
// add font icon to library
library.add(faUser, faSearch)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

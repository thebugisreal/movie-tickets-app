import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Footer from './components/Footer';
// import Slider from './components/Slider';
// import QuickBooking from './components/quickBooking/QuickBooking';
import QuickBooking from './components/QuickBooking';
// font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faUser, faSearch, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
// add font icon to library
library.add(fab, faUser, faSearch, faAngleLeft)

class App extends Component {
  // constructor(props){
  //   super(props);

  //   this.state = {
  //       width: 0
  //   }
  // }

  // componentDidMount(){
  //   this.updateWidth();
  //   window.addEventListener('resize', this.updateWidth.bind(this))
  //   console.log(window.innerWidth);
  // }

  // updateWidth(){
  //   this.setState({width: window.innerWidth});
  // }

  render() {
    return (
      <Provider store={store}>
      <div>
        <Header />
        <div style={{height: '500px', background: 'black'}}></div>
        <QuickBooking />
        <Footer />
        <div style={{height: '500px', background: 'black'}}></div>
      </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Slider from './Slider';
import Movie from './Movie';
import Banner from './Banner';
import News from './News';
import Promotion from './Promotion';
import QuickBooking from './QuickBooking';

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Movie />
        <Banner url={"./static/banner/1.png"} title={"Download Now"}/>
        <News />
        <Promotion />
        <QuickBooking />
      </div>
    );
  }
}

export default Home;
import React from 'react';
import Slider from '../../components/Home/Slider';
import Movie from '../../components/Home/Movie';
import Banner from '../../components/Home/Banner';
import News from '../../components/Home/News';
import Promotion from '../../components/Home/Promotion';
import QuickBooking from '../../components/Home/QuickBooking';

export default () => {
  return (
    <div>
      <Slider />
      <Movie />
      <Banner url={"/news/cuoi-tuan-xem-phim-tha-ga"} img={"./assets/banners/1.png"} title={"Download Now"}/>
      <News />
      <Promotion />
      <QuickBooking />
    </div>
  );
}
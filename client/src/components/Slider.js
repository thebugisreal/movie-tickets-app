import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import img1 from '../static/slider/1.jpg';
import img2 from '../static/slider/2.jpg';
import img3 from '../static/slider/3.jpg';

const items = [
  {
    src: img1
  },
  {
    src: img2
  },
  {
    src: img3
  }
];

const Slider = () => <UncontrolledCarousel className="my-4" items={items} />;

export default Slider;
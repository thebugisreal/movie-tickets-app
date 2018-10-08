import React, { Component } from 'react';
import { UncontrolledCarousel, Container } from 'reactstrap';
import img1 from '../static/slider/1.jpg';
import img2 from '../static/slider/2.jpg';
import img3 from '../static/slider/3.jpg';

const items = [
  { 
  	src: img1,
    altText: '',
    caption: '',
    header: ''
  }, 
  { 
  	src: img2,
    altText: '',
    caption: '',
    header: ''
  }, 
  { 
  	src: img3,
    altText: '',
    caption: '',
    header: ''
  }
];

class Slider extends Component {
  render() {
    return (
			<section className="slider">
		    <Container>
					<UncontrolledCarousel className="py-4" items={items} />
				</Container>
		  </section>
    )
  }
}

export default Slider;
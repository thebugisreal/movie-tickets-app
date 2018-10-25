import React, { Component } from 'react';
import { Container } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import image1 from '../static/slider/1.jpg';
// import image2 from '../static/slider/2.jpg';
// import image3 from '../static/slider/3.jpg';

class Slider extends Component {
  render() {
    return (      
			<section className="slider py-4">
		    <Container className="postion-relative">
          <div className="slider__nav position-relative"></div>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
            items={1}
            autoplay={true}
            navContainer={'.slider__nav'}
            dotsContainer={'.slider__dot'}
          >
            <div className="item">
              <img src="./static/slider/1.jpg" alt="test" />
            </div>
            <div className="item">
              <img src="./static/slider/2.jpg" alt="test" />
            </div>
            <div className="item">
              <img src="./static/slider/3.jpg" alt="test" />
            </div>
          </OwlCarousel>
				</Container>
        <div className="position-relative d-flex justify-content-center">
          <div className="slider__dot position-absolute"></div>
        </div>
		  </section>
    )
  }
}

export default Slider;
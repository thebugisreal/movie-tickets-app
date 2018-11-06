import React from 'react';
import { Container } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default () => {
  return (      
    <section className="slider py-4">
      <Container>
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
            <img src="./assets/sliders/1.jpg" alt="test" />
          </div>
          <div className="item">
            <img src="./assets/sliders/2.jpg" alt="test" />
          </div>
          <div className="item">
            <img src="./assets/sliders/3.jpg" alt="test" />
          </div>
          <div className="item">
            <img src="./assets/sliders/980x448_41.jpg" alt="test" />
          </div>
          <div className="item">
            <img src="./assets/sliders/980x448_46.jpg" alt="test" />
          </div>
          <div className="item">
            <img src="./assets/sliders/cgv_shortfilm_app-banner_180620_2.jpg" alt="test" />
          </div>
          <div className="item">
            <img src="./assets/sliders/cine_lounge_web__980x448.jpg" alt="test" />
          </div>
        </OwlCarousel>
      </Container>
      <div className="position-relative d-flex justify-content-center">
        <div className="slider__dot position-absolute"></div>
      </div>
    </section>
  )
}
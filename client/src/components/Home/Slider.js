import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default () => {
  return (      
    <section className="slider">
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
          <img src="./assets/sliders/Venom-Banner.png" alt="Venom" />
        </div>
        <div className="item">
          <img src="./assets/sliders/Bloodstock-3-weeks-banner.jpg" alt="Bloodstock 3" />
        </div>
        <div className="item">
          <img src="./assets/sliders/Home-Again-Movie-Banner.png" alt="Home Again" />
        </div>
        <div className="item">
          <img src="./assets/sliders/Lightning-In-A-Bottle-2017-Banner.jpg" alt="Lightning in a Bottle" />
        </div>
        <div className="item">
          <img src="./assets/sliders/ROTR-Sold-Out-Banner.jpg" alt="ROTR Sold Out" />
        </div>
        <div className="item">
          <img src="./assets/sliders/star-wars-last-jedi-banner.jpg" alt="Start Wars" />
        </div>
      </OwlCarousel>
      <div className="position-relative d-flex justify-content-center">
        <div className="slider__dot position-absolute"></div>
      </div>
    </section>
  )
}
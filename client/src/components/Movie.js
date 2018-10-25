import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';
import { Container } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  // fetch data from redux
  componentWillMount() {
    this.props.fetchMovies();
  }

  // after fetched, assign data to state
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.movies
    })
  }

  render() {
    return (
      <section className="movie">  
        <Container>
          <div className="w-100 d-flex justify-content-between">
            <h5 className="pt-4 text-light">
              <FontAwesomeIcon className="mr-2" icon="film" />
              PHIM ĐANG CHIẾU
            </h5>
            <div className="movie__nav position-relative pt-4"></div>
          </div>
          <OwlCarousel
            className="owl-theme pt-2 pb-4"
            loop
            margin={10}
            nav
            items={4}
            autoplay={true}
            navContainer={'.movie__nav'}
            dots={false}
            responsiveClass={true}
            responsive={{
              0: {
                items: 2
              },
              600:{
                items: 3
              },
              1000:{
                items: 4
              }
            }}
          >
            { this.state.data === null ? <div></div> : this.state.data.map((item, index) => (
              <div key={ index } className="movie__list position-relative">
                <a href="https://google.com">
                  <img src={ item.thumbnail } alt={item.name} />
                </a>
                <div className="movie__box position-absolute w-100 py-3 d-flex flex-column align-items-center">
                  <h1 className="movie__title text-light px-3 pb-1">{ item.name }</h1>
                  <div className="d-flex justify-content-center w-100 text-white">
                    <div className="movie__btn rounded font-weight-bold">XEM CHI TIẾT</div>
                    <div className="movie__btn rounded font-weight-bold">PLAY TRAILER</div>
                  </div>
                </div>
              </div>
            )) }
          </OwlCarousel>
        </Container>
      </section>
    )
  }
}

const mapStateProps = state => ({
  movies: state.movies.items
});

export default connect(mapStateProps, { fetchMovies })(Movie);
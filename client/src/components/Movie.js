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
      data: null,
      slug: '',
      scroll: {
        top: '0',
        display: 'flex'
      },
      isShow: false
    }

    this.handleHideBox = this.handleHideBox.bind(this);
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

  handleShowBox(slug) {
    const scroll = window.scrollY + 100;
    this.setState({
      slug: slug,
      scroll: {
        ...this.state.scroll,
        top: scroll + 'px'
      },
      isShow: true
    })
  }

  handleHideBox() {
    this.setState({
      isShow: false,
      slug: ''
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
            className="owl-theme pt-2 pb-3 pb-sm-4 pb-xl-5"
            loop
            margin={10}
            nav
            items={4}
            autoplay={true}
            navContainer={'.movie__nav'}
            dots={false}
            responsiveClass={true}
            responsive={{ 0: { items: 2 }, 600:{ items: 3 }, 1000:{ items: 4 }}}
          >
            { this.state.data === null ? <div></div> : this.state.data.map((item, index) => (
              <div key={ index } className="movie__list position-relative">
                <span
                  className="movie__rating position-absolute"
                  style={ { backgroundPosition: item.rated.position } }
                >
                  { item.rated.name }
                </span>
                <a href="https://google.com">
                  <img src={ item.thumbnail } alt={item.name} />
                </a>
                <div className="movie__box position-absolute w-100 py-3 d-flex flex-column align-items-center">
                  <h1 className="movie__title text-light px-3 pb-1">{ item.name }</h1>
                  <div className="d-flex justify-content-center w-100 text-white">
                    <div className="movie__btn rounded font-weight-bold">XEM CHI TIẾT</div>
                    <div 
                      className="movie__btn rounded font-weight-bold"
                      onClick={ () => this.handleShowBox(item.slug) }
                    >
                      PLAY TRAILER
                    </div>
                  </div>
                </div>
              </div>
            )) }
          </OwlCarousel>
        </Container>
        <div
          className="movie__trailer position-absolute w-100 justify-content-center"
          style={ this.state.isShow ? this.state.scroll : { display: 'none' } } 
        >
          <div className="movie__trailer--box position-relative">
            <div 
              onClick={ this.handleHideBox }
              className="movie__close position-absolute"
            >
              [ Close ]
            </div>
            <iframe
              title="Watch Trailer..."
              width="100%"
              height="100%"
              src={"https://www.youtube.com/embed/" + this.state.slug }
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen>
            </iframe>
          </div>
        </div>
        <div 
          style={ this.state.isShow ? { display: 'flex' } : { display: 'none' } } 
          className="movie__trailer--overlay position-absolute w-100 h-100"
          onClick={ this.handleHideBox }
        >
        </div>
      </section>
    )
  }
}

const mapStateProps = state => ({
  movies: state.movies.items
});

export default connect(mapStateProps, { fetchMovies })(Movie);
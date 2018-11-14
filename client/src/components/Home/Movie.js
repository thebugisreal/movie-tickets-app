import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: '',
      isShow: false
    }

    this.handleShowBox = this.handleShowBox.bind(this);
    this.handleHideBox = this.handleHideBox.bind(this);
  }
  
  handleShowBox(slug) {
    this.setState({
      slug: slug,
      isShow: true
    })
  }

  handleHideBox() {
    this.setState({
      slug: '',
      isShow: false
    })
  }

  showContent() {
    return(
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
        { this.props.movies.map((item, index) => (
          <div key={ index } className="movie__list position-relative">
            <span
              className="movie__rating position-absolute"
              style={ { backgroundPosition: item.rated.position } }
            >
              { item.rated.name }
            </span>
            <Link 
              to={`/movies/${item.slug}`}
            >
              <img src={ item.thumbnail } alt={item.name} />
            </Link>
            <div className="movie__box position-absolute w-100 py-3 d-flex flex-column align-items-center">
              <h1 className="movie__title text-light px-3 pb-1">{ item.name }</h1>
              <div className="d-flex justify-content-center w-100 text-white">
                <div className="movie__btn rounded font-weight-bold">
                  <Link 
                    to={`/movies/${item.slug}`}
                  >
                    XEM CHI TIẾT
                  </Link>
                </div>
                <div 
                  className="movie__btn rounded font-weight-bold"
                  onClick={ () => this.handleShowBox(item.youtube) }
                >
                  PLAY TRAILER
                </div>
              </div>
            </div>
          </div>
        )) }
      </OwlCarousel>
    )
  }

  showTrailer() {
    // calculate space between top window with trailer box
    const scroll = window.scrollY + 100;
    return(
      <div>
        <div
          className="movie__trailer position-absolute w-100 d-flex justify-content-center"
          style={{ top: scroll }} 
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
          className="movie__trailer--overlay d-flex position-absolute w-100 h-100"
          onClick={ this.handleHideBox }
        >
        </div>
      </div>
    )
  }

  render() {
    return (
      <section className="movie bg-custom">
        <Container>
          <div className="w-100 d-flex justify-content-between">
            <h5 className="pt-4 text-light">
              <FontAwesomeIcon className="mr-2" icon="film" />
              PHIM ĐANG CHIẾU
            </h5>
            <div className="movie__nav position-relative pt-4"></div>
          </div>
          { this.props.movies.length !== 0 ? this.showContent() : '' }
        </Container>
        { this.state.isShow ? this.showTrailer() : '' }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items
  //------state.[movieAction.js].[movieReducer.js]
});

export default connect(mapStateToProps, null)(Movie);
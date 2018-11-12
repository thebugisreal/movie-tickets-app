import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Ads from '../../components/Movie/Ads';
import Tags from '../../components/Movie/Tags';
import ShowTimes from '../../components/Movie/ShowTimes';
import MovieInfo from '../../components/Movie/MovieInfo';
import SocialMedia from '../../components/Movie/SocialMedia';
import MovieDetails from '../../components/Movie/MovieDetails';

class MoviePage extends Component {
  render() {
    return(
      <div>{ this.props.movie && this.showContent() }</div>
    )
  }

  showContent() {
    const { movie } = this.props;
    return(
      <div className="moviePage w-100 position-relative pb-5">
        <div className="moviePage__overlay position-absolute w-100" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%,rgba(8,8,8,1) 100%), url(${movie.background})` }}></div>
        <Container className="moviePage__container">
          <Row className="mb-4">
            <Col xs="12" lg="3" className="pl-lg-0 pl-xl-3 d-flex justify-content-center justify-content-lg-start">
              <img src={ movie.image } alt={ movie.name } />  
            </Col>
            <Col xs="12" lg="9" className="pr-lg-0 pr-xl-3">
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <MovieInfo />
                <div className="justify-content-center d-flex mt-3 align-self-md-end moviePage__booking">
                  ĐẶT VÉ NGAY
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mb-0 mb-md-5">
            <Col xs="12" lg="3" className="mb-3">
              <Tags />
            </Col>
            <Col xs="12" lg="6" className="mb-3">
              <MovieDetails />
            </Col>
            <Col xs="12" lg="3">
              <Ads />
              <SocialMedia />
            </Col>
          </Row>
          <ShowTimes />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movies.booking.chooseMovie
})

export default connect(mapStateToProps, null)(MoviePage);
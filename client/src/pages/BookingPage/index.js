import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class BookingPage extends Component {
  showCinema(slug) {
    const movie = this.props.movies.filter(item => item.slug === slug)[0];
    if(movie.length !== 0) {
      return(
        movie.cinema.map((item, index) => (
          <div key={ index } onClick={ () => this.chooseCinema(item.name) }>{ item.name }</div>
        ))
      )
    }
  }

  render() {
    const { match } = this.props;
    const { slug } = match.params;
    return(
      <div>
        <div className="bookingPage__nav d-flex align-items-center">
          <Link to={`/movies/${slug}`} className="ml-4 mr-3 pr-2">
            <FontAwesomeIcon className="mr-2" icon="angle-left" /><span>Back</span>
          </Link>
          <div className="bookingPage__step active mx-4">1. CHỌN RẠP</div>
          <div className="bookingPage__step mx-4">2. CHỌN VÉ + COMBO</div>
          <div className="bookingPage__step mx-4">3. CHỌN GHẾ</div>
          <div className="bookingPage__step mx-4">4. THANH TOÁN</div>
        </div>
        <div>
          <Container className="my-5">
            { this.props.movies.length !== 0 && (
              <Row className="border border-secondary">
                <Col xl="4" className="border-right border-secondary">
                  { this.showCinema(slug) }
                </Col>
                <Col xl="3"></Col>
                <Col xl="5" className="border-left border-secondary"></Col>
              </Row>
            ) }  
          </Container>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items
})

export default connect(mapStateToProps, null)(BookingPage);
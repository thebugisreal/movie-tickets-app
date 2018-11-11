import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class BookingPage extends Component {
  render() {
    const { match } = this.props;
    const { slug } = match.params;
    return(
      <div>
        <div className="bookingPage__nav d-flex align-items-center">
          <Link to={`/movies/${slug}`} className="ml-4 mr-3 pr-2">
            <FontAwesomeIcon className="mr-2" icon="angle-left" /><span>Back</span>
          </Link>
          <div className="bookingPage__step active mx-4">1. CHỌN VÉ + COMBO</div>
          <div className="bookingPage__step mx-4">2. CHỌN GHẾ</div>
          <div className="bookingPage__step mx-4">3. THANH TOÁN</div>
        </div>
        <Container className="my-5 text-light">
          <Row className="mx-0">
            <Col xl="8" className="pl-0">
              <div className="d-flex mb-3 align-items-center">
                <h3 className="mr-4">{ this.props.movie }</h3>
                <FontAwesomeIcon className="mr-2 text-white-50" icon="clock" />
                <span>{ this.props.item.runningTime }</span>
              </div>
              <p className="text-white-50">{ this.props.item.decs }</p>
              <Row className="mx-0 py-4 border-bottom border-secondary">
                <Col xl="4" className="pl-0">
                  <p className="text-white-50">Tên rạp</p>
                  <p>{ this.props.cinema }</p>
                </Col>
                <Col xl="3">
                  <p className="text-white-50">Ngày chiếu</p>
                  <p>{ this.props.date }</p>
                </Col>
                <Col xl="3">
                  <p className="text-white-50">Suất</p>
                  <p>{ this.props.time }</p>
                </Col>
              </Row>

              {/* custom */}
              <Row className="mx-0 py-4">
                <Col xl="4" className="pl-0 d-flex flex-column justify-content-center">
                  <p>Vé người lớn</p>
                  <p className="text-white-50">(vé 2D)</p>
                </Col>
                <Col xl="4" className="d-flex justify-content-center align-items-center">
                  <p className="text-info">85.000</p>
                </Col>
                <Col xl="4" className="d-flex pr-0 justify-content-end align-items-center">
                  <button 
                    className="bookingPage__btn border-0 position-relative font-weight-bold"
                  >
                    -
                  </button>
                  <input className="bookingPage__input text-center" type="text" />
                  <button 
                    className="bookingPage__btn pr-0 border-0 position-relative font-weight-bold"
                  >
                    +
                  </button>
                </Col>
              </Row>
              <Row className="mx-0 py-4">
                <Col xl="4" className="pl-0 d-flex flex-column justify-content-center">
                  <p>Combo 1</p>
                  <p className="text-white-50">(1 Bắp + 1 Nước)</p>
                </Col>
                <Col xl="4" className="d-flex justify-content-center align-items-center">
                  <p className="text-info">40.000</p>
                </Col>
                <Col xl="4" className="d-flex pr-0 justify-content-end align-items-center">
                  <button 
                    className="bookingPage__btn border-0 position-relative font-weight-bold"
                  >
                    -
                  </button>
                  <input className="bookingPage__input text-center" type="text" />
                  <button 
                    className="bookingPage__btn pr-0 border-0 position-relative font-weight-bold"
                  >
                    +
                  </button>
                </Col>
              </Row>
              <div className="py-4 border-bottom border-secondary">
                <Button color="danger">
                  <span className="mr-2">Chọn Ghế</span>
                  <FontAwesomeIcon icon="arrow-right" />
                </Button>
              </div>















            </Col>
            <Col xl={{ size: 3, offset: 1}} className="d-flex flex-column">
              <img src={ this.props.item.image } alt={ this.props.movie } />
            </Col>
          </Row>
        </Container>
      </div> 
    )
  }
}

// a.toLocaleString('de-DE');

const mapStateToProps = state => ({
  item: state.movies.item,
  movie: state.movies.booking.movie,
  cinema: state.movies.booking.cinema,
  date: state.movies.booking.date,
  time: state.movies.booking.time
})

export default connect(mapStateToProps, null)(BookingPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'reactstrap';

class BookingInfo extends Component {
  render() {
    const { movie, cinema, date, time } = this.props;
    return(
      <div>
        <div className="d-flex mb-3 align-items-center">
          <h3 className="mr-4">{ movie.name }</h3>
          <FontAwesomeIcon className="mr-2 text-white-50" icon="clock" />
          <span>{ movie.runningTime }</span>
        </div>
        <p className="text-white-50">{ movie.decs }</p>
        <Row className="mx-0 py-4 border-bottom border-secondary">
          <Col xs="12" md="5" className="pl-0 mb-3 mb-md-0">
            <p className="text-white-50">Tên rạp</p>
            <p>{ cinema.name }</p>
          </Col>
          <Col xs="6" md="4" className="pl-0">
            <p className="text-white-50">Ngày chiếu</p>
            <p>{ date.date }</p>
          </Col>
          <Col xs="6" md="3">
            <p className="text-white-50">Suất</p>
            <p>{ time.time }</p>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movies.booking.chooseMovie,
  cinema: state.movies.booking.chooseCinema,
  date: state.movies.booking.chooseDate,
  time: state.movies.booking.chooseTime
})

export default connect(mapStateToProps, null)(BookingInfo);
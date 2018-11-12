import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'reactstrap';

class BookingInfo extends Component {
  render() {
    return(
      <div>
        <div className="d-flex mb-3 align-items-center">
          <h3 className="mr-4">{ this.props.movie }</h3>
          <FontAwesomeIcon className="mr-2 text-white-50" icon="clock" />
          <span>{ this.props.item.runningTime }</span>
        </div>
        <p className="text-white-50">{ this.props.item.decs }</p>
        <Row className="mx-0 py-4 border-bottom border-secondary">
          <Col xl="5" className="pl-0">
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.movies.item,
  movie: state.movies.booking.movie,
  cinema: state.movies.booking.cinema,
  date: state.movies.booking.date,
  time: state.movies.booking.time
})

export default connect(mapStateToProps, null)(BookingInfo);
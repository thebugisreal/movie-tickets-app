import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { showTicket, showSeat } from '../../actions/movieActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class Navbar extends Component {
  render() {
    const { isShowTicket, isShowSeat, isShowPayment } = this.props;
    return(
      <Row className="bookingPage__nav mx-0 d-flex align-items-center">
        <Link to={`/movies/${this.props.slug}`} className="d-flex justify-content-center align-items-center col-3 col-xl-1 offset-xl-1">
          <FontAwesomeIcon className="mr-2" icon="angle-left" /><span>Back</span>
        </Link>
        <Col
          xs="3"
          xl="2"
          onClick={ () => this.props.showTicket() }
          className={`${classnames({ active: isShowTicket === true })} bookingPage__step px-2`}
        >
          1. CHỌN VÉ + COMBO
        </Col>
        <Col 
          xs="3"
          xl="2"
          onClick={ () => this.props.showSeat() }
          className={`${classnames({ active: isShowSeat === true })} bookingPage__step px-2`}
        >
          2. CHỌN GHẾ
        </Col>
        <Col 
          xs="3"
          xl="2"
          className={`${classnames({ active: isShowPayment === true })} bookingPage__step px-2`}
        >
          3. THANH TOÁN
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  isShowTicket: state.movies.booking.isShowTicket,
  isShowSeat: state.movies.booking.isShowSeat,
  isShowPayment: state.movies.booking.isShowPayment
})

export default connect(mapStateToProps, { showTicket, showSeat })(Navbar);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { showTicket, showSeat, showPayment } from '../../actions/movieActions';
import { toggleMenu } from '../../actions/userActions';
import { showMessage } from '../../actions/messageActions';
import { ERR_CHOOSE_SEAT } from '../../constants/messageTypes';

class Navbar extends Component {
  constructor() {
    super()

    this.checkShowPayment = this.checkShowPayment.bind(this);
  }

  checkShowPayment() {
    if(this.props.tickets !== this.props.chooseSeat.length) return this.props.showMessage({ message: ERR_CHOOSE_SEAT, type: 'danger'});
    if(!this.props.logged) return this.props.toggleMenu();
    return this.props.showPayment();
  }

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
          onClick={ this.checkShowPayment }
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
  isShowPayment: state.movies.booking.isShowPayment,
  tickets: state.movies.booking.tickets,
  chooseSeat: state.movies.booking.chooseSeat,
  logged: state.users.logged
})

export default connect(mapStateToProps, { showTicket, showSeat, showPayment, toggleMenu, showMessage })(Navbar);
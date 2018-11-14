import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showTicket, showSeat } from '../../actions/movieActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class Navbar extends Component {
  render() {
    const { isShowTicket, isShowSeat, isShowPayment } = this.props;
    return(
      <div className="bookingPage__nav d-flex align-items-center">
        <Link to={`/movies/${this.props.slug}`} className="ml-4 mr-3 pr-2">
          <FontAwesomeIcon className="mr-2" icon="angle-left" /><span>Back</span>
        </Link>
        <div
          onClick={ () => this.props.showTicket() }
          className={`${classnames({ active: isShowTicket === true })} bookingPage__step mx-4`}
        >
          1. CHỌN VÉ + COMBO
        </div>
        <div 
          onClick={ () => this.props.showSeat() }
          className={`${classnames({ active: isShowSeat === true })} bookingPage__step mx-4`}
        >
          2. CHỌN GHẾ
        </div>
        <div 
          className={`${classnames({ active: isShowPayment === true })} bookingPage__step mx-4`}
        >
          3. THANH TOÁN
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isShowTicket: state.movies.booking.isShowTicket,
  isShowSeat: state.movies.booking.isShowSeat,
  isShowPayment: state.movies.booking.isShowPayment
})

export default connect(mapStateToProps, { showTicket, showSeat })(Navbar);
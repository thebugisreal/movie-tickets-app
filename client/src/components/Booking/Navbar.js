import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div className="bookingPage__nav d-flex align-items-center">
        <Link to={`/movies/${this.props.slug}`} className="ml-4 mr-3 pr-2">
          <FontAwesomeIcon className="mr-2" icon="angle-left" /><span>Back</span>
        </Link>
        <div className="bookingPage__step active mx-4">1. CHỌN VÉ + COMBO</div>
        <div className="bookingPage__step mx-4">2. CHỌN GHẾ</div>
        <div className="bookingPage__step mx-4">3. THANH TOÁN</div>
      </div>
    )
  }
}

export default Navbar;
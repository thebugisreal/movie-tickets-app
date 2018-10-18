import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Title extends Component {
  render() {
    return (
      <Col sm="2" className="position-relative">
        <span className="quickBooking__title d-flex align-items-center font-weight-bold">
          ĐẶT VÉ NHANH
          <div className="quickBooking__slash position-absolute h-100"></div>
        </span>
      </Col>
    );
  }
}

export default Title;
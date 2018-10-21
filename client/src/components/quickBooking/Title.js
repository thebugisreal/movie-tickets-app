import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Title extends Component {
  render() {
    return (
      <Col lg="2" md="3" className="position-relative px-0 px-sm-3">
        <span className="quickBooking__title d-flex align-items-center justify-content-center justify-content-sm-start font-weight-bold">
          ĐẶT VÉ NHANH
          <div className="quickBooking__slash position-absolute h-100 d-none d-sm-block"></div>
        </span>
      </Col>
    );
  }
}

export default Title;
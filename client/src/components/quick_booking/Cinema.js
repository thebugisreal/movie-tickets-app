import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Cinema extends Component {
	// constructor(props) {
  //   super(props);
  // }
  render() {
    return (
    	<Col sm={{ size: 2, offset: 1 }} className="quickBooking__booth d-flex align-items-center position-relative">
        <span className="quickBooking__name position-absolute">Tên Rạp</span>
        <span
          className="w-75 quickBooking__text quickBooking__text--active position-absolute"
        >
        </span>
        <div className="quickBooking__menu position-absolute">
        <ul>
          <li className="quickBooking__list">
            CGV Vincom Đồng Khởi
          </li>
          <li className="quickBooking__list">
            CGV Vincom Vò Gấp
          </li>
          <li className="quickBooking__list">
            CGV Thảo Điền Pearl
          </li>
          <li className="quickBooking__list">
            CGV Golden Plaza
          </li>
          <li className="quickBooking__list">
            CGV Sư Vạn Hạnh
          </li>
        </ul>
        </div>
      </Col> 
    );
  }
}

export default Cinema;
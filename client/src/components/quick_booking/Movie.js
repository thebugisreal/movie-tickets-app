import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Movie extends Component {
	// constructor(props) {
  //   super(props);
  // }
  render() {
    return (
    	<Col sm="2" className="quickBooking__booth d-flex align-items-center position-relative">
            Tên Phim
            <span className="w-75 quickBooking__text position-absolute"></span>
        </Col>
    );
  }
}

export default Movie;
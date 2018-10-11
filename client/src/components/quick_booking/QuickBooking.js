import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Cinema from './Cinema';
import Movie from './Movie';
import Date from './Date';
import Time from './Time';

class QuickBooking extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
      
  //   };
  // }

  render() {
    return (
      <section className="quickBooking position-relative">
        <Container>
          <Row>
            <Col sm="2" className="position-relative">
              <span className="quickBooking__title d-flex align-items-center font-weight-bold">
                ĐẶT VÉ NHANH
                <div className="quickBooking__slash position-absolute h-100"></div>
              </span>
            </Col>
            <Cinema />
            <Movie />
            <Date />
            <Time />
          </Row>
        </Container>
      </section>
    )
  }
}

export default QuickBooking;
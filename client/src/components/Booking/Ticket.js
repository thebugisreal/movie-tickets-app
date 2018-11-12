import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Ticket extends Component {
  render() {
    return(
      <div>
        <Row className="mx-0 py-4">
          <Col xl="4" className="pl-0 d-flex flex-column justify-content-center">
            <p>Vé người lớn</p>
            <p className="text-white-50">(vé 2D)</p>
          </Col>
          <Col xl="4" className="d-flex justify-content-center align-items-center">
            <p className="text-info">85.000</p>
          </Col>
          <Col xl="4" className="d-flex pr-0 justify-content-end align-items-center">
            <button 
              className="bookingPage__btn border-0 position-relative font-weight-bold"
            >
              -
            </button>
            <input className="bookingPage__input text-center" type="text" />
            <button 
              className="bookingPage__btn pr-0 border-0 position-relative font-weight-bold"
            >
              +
            </button>
          </Col>
        </Row>
        <Row className="mx-0 py-4">
          <Col xl="4" className="pl-0 d-flex flex-column justify-content-center">
            <p>Combo 1</p>
            <p className="text-white-50">(1 Bắp + 1 Nước)</p>
          </Col>
          <Col xl="4" className="d-flex justify-content-center align-items-center">
            <p className="text-info">40.000</p>
          </Col>
          <Col xl="4" className="d-flex pr-0 justify-content-end align-items-center">
            <button 
              className="bookingPage__btn border-0 position-relative font-weight-bold"
            >
              -
            </button>
            <input className="bookingPage__input text-center" type="text" />
            <button 
              className="bookingPage__btn pr-0 border-0 position-relative font-weight-bold"
            >
              +
            </button>
          </Col>
        </Row>
        <div className="py-4 border-bottom border-secondary">
          <Button color="danger">
            <span className="mr-2">Chọn Ghế</span>
            <FontAwesomeIcon icon="arrow-right" />
          </Button>
        </div>
      </div>
    )
  }
}

export default Ticket;
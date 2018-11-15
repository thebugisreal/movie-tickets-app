import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';

class Purchase extends Component {
  render() {
    const { movie, tickets, combo, getSeat } = this.props;
    return(
      <div>
        <img className="mb-3 w-100" src={ movie.image } alt={ movie.name } />
        <Row className="mx-0 my-2">
          <Col xs="5" xl="6" className="text-white-50 pl-0 d-flex align-items-center">
            Số lượng vé
          </Col>
          <Col xs="2" xl="2" className="text-light d-flex justify-content-center align-items-center">
            { tickets }
          </Col>
          <Col xs="5" xl="4" className="text-light pr-0 d-flex justify-content-end align-items-center">
            { movie.price*tickets }
          </Col>
        </Row>
        <Row className="mx-0 my-2">
          <Col xs="5" xl="6" className="text-white-50 pl-0 d-flex align-items-center">
            Số lượng combo
          </Col>
          <Col xs="2" xl="2" className="text-light d-flex justify-content-center align-items-center">
            { combo }
          </Col>
          <Col xs="5" xl="4" className="text-light pr-0 d-flex justify-content-end align-items-center">
            { combo*40000 }
          </Col>
        </Row>
        <Row className="mx-0 my-2">
          <Col xs="6" className="text-white-50 pl-0">Ghế ngồi</Col>
          <Col xs="6" className="text-light pr-0 d-flex justify-content-end">
            { getSeat.length === 0 ? 'Chưa chọn' : getSeat.join(', ') }
          </Col>
        </Row>
        <Row className="mx-0 my-2 py-3">
          <Col xs="6" className="text-danger pl-0">Tổng cộng</Col>
          <Col xs="6" className="text-light pr-0 d-flex justify-content-end">
            { tickets*movie.price + combo*40000 }
          </Col>
        </Row>
        <Button className="w-100" color="danger">THANH TOÁN</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movies.booking.chooseMovie,
  tickets: state.movies.booking.tickets,
  combo: state.movies.booking.combo,
  getSeat: state.movies.booking.chooseSeat
})

export default connect(mapStateToProps, null)(Purchase);
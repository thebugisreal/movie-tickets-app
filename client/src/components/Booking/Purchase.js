import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';

class Purchase extends Component {
  render() {
    return(
      <div>
        <img className="mb-3 w-100" src={ this.props.item.image } alt={ this.props.movie } />
        <Row className="mx-0 my-2">
          <Col xl="6" className="text-white-50 pl-0 d-flex align-items-center">
            Số lượng vé
          </Col>
          <Col xl="2" className="text-light d-flex justify-content-center align-items-center">
            1
          </Col>
          <Col xl="4" className="text-light pr-0 d-flex justify-content-end align-items-center">
            85.000
          </Col>
        </Row>
        <Row className="mx-0 my-2">
          <Col xl="6" className="text-white-50 pl-0 d-flex align-items-center">
            Số lượng combo
          </Col>
          <Col xl="2" className="text-light d-flex justify-content-center align-items-center">
            0
          </Col>
          <Col xl="4" className="text-light pr-0 d-flex justify-content-end align-items-center">
            0
          </Col>
        </Row>
        <Row className="mx-0 my-2">
          <Col xl="6" className="text-white-50 pl-0">Ghế ngồi</Col>
          <Col xl="6" className="text-light pr-0 d-flex justify-content-end">Chưa chọn</Col>
        </Row>
        <Row className="mx-0 my-2 py-3">
          <Col xl="6" className="text-danger pl-0">Tổng cộng</Col>
          <Col xl="6" className="text-light pr-0 d-flex justify-content-end">85.000</Col>
        </Row>
        <Button className="w-100" color="danger">THANH TOÁN</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.movies.item,
  movie: state.movies.booking.movie
})

export default connect(mapStateToProps, null)(Purchase);
import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

const CheckoutPage = (props) => {
  return(
    <Container>
      <h2 className="mt-4 text-white">CHECK OUT</h2>
      <Row className="py-4">
        <Col md="8">
          <Row className="border-bottom py-3 mx-0" style={{ borderColor: '#191919' }}>
            <Col className="px-0">
              <p className="checkout__title">Tên Phim</p>
              <h4 className="text-light">{ props.chooseMovie.name }</h4>
            </Col>
          </Row>
          <Row className="py-3 mx-0">
            <Col xs="4" className="pl-0">
              <p className="checkout__title">Tên Rạp</p>
              <p className="text-light">{ props.chooseCinema.name }</p>
            </Col>
            <Col xs="4">
              <p className="checkout__title">Ngày Chiếu</p>
              <p className="text-light">{ props.chooseDate.date }</p>
            </Col>
            <Col xs="4" className="pr-0">
              <p className="checkout__title">Suất</p>
              <p className="text-light">{ props.chooseTime.time }</p>
            </Col>
          </Row>
          <Row className="border-bottom border-secondary py-3 mx-0" style={{ borderColor: '#191919' }}>
            <Col xs="4" className="pl-0">
              <p className="checkout__title">Loại Combo</p>
              <p className="text-light">1 Bắp + 1 Nước</p>
            </Col>
            <Col xs="4">
              <p className="checkout__title">SL Combo</p>
              <p className="text-light">{ props.combo }</p>
            </Col>
            <Col xs="4" className="pr-0">
              <p className="checkout__title">Ghế</p>
              <p className="text-light">{ props.chooseSeat.join(', ') }</p>
            </Col>
          </Row>
          <Row className="py-3 mx-0">
            <Col xs="4" className="pl-0">
              <p className="checkout__title">Mã GD</p>
              <p className="text-light">No.10111000123</p>
              <img className="w-75 mt-3" src="https://camo.githubusercontent.com/e12db4f7b6cdeb14ea928e01e306ac73a9fb70fa/68747470733a2f2f656e64726f69642e6e6c2f71722d636f64652f4c6966652532306973253230746f6f25323073686f7274253230746f253230626525323067656e65726174696e672532305152253230636f6465732e706e67" alt="QR CODE" />
            </Col>
            <Col xs={{ size: 4, offset: 4 }} className="pr-0">
              <p className="checkout__title">Tổng Tiền</p>
              <p className="text-light">{ props.amount }</p>
            </Col>
          </Row>
        </Col>
        <Col md="4" className="text-center mt-5">
          <img className="w-75" src="http://www.fpsa.org/wp-content/uploads/icons8-ok-528.png" alt="Done" />
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => ({
  chooseMovie: state.movies.booking.chooseMovie,
  chooseCinema: state.movies.booking.chooseCinema,
  chooseDate: state.movies.booking.chooseDate,
  chooseTime: state.movies.booking.chooseTime,
  combo: state.movies.booking.combo,
  chooseSeat: state.movies.booking.chooseSeat,
  amount: state.movies.booking.amount
})

export default connect(mapStateToProps, null)(CheckoutPage);
import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

class QuickBooking extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      titleStyle: {
        fontSize: '13px',
        transform: 'translateY(0px)',
        color: '#969696'
      },
      menu1: {
        opacity: '0'
      }
    };
// 170px
    this.onBookingName = this.onBookingName.bind(this);
  }

  onBookingName() {
    this.setState({
      titleStyle: {
        fontSize: '10px',
        transform: 'translateY(-15px)',
        color: '#ffce26'
      },
      menu1: {
        opacity: '1'
      }
    });
    console.log('click');
  }

  render() {
    return (
      <section className="quickBooking position-relative">
        <Container>
          <div className="position-absolute">
            <span className="quickBooking__title d-flex align-items-center font-weight-bold">
              ĐẶT VÉ NHANH
              <div className="quickBooking__slash position-absolute h-100"></div>
            </span>
          </div>
          <Row>
            <Col sm={{ size: 2, offset: 3 }} className="quickBooking__booth d-flex align-items-center position-relative">
              <span style={ this.state.titleStyle } className="quickBooking__name position-absolute">Tên Rạp</span>
              <span 
                onClick={ this.onBookingName }
                className="w-75 quickBooking__text quickBooking__text--active position-absolute"
              >
              </span>
             <div style={ this.state.menu1 } className="quickBooking__menu position-absolute">
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
            <Col sm="2" className="quickBooking__booth d-flex align-items-center position-relative">
             Tên Phim
             <span className="w-75 quickBooking__text position-absolute"></span>
            </Col>
            <Col sm="2" className="quickBooking__booth d-flex align-items-center position-relative">
             Ngày Chiếu
             <span className="w-75 quickBooking__text position-absolute"></span>
            </Col>
            <Col sm="2" className="quickBooking__booth d-flex align-items-center position-relative">
             Xuất Chiếu
             <span className="w-75 quickBooking__text position-absolute"></span>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default QuickBooking;
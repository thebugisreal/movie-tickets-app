import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../../components/Booking/Navbar';
import BookingInfo from '../../components/Booking/BookingInfo';
import Purchase from '../../components/Booking/Purchase';
import Ticket from '../../components/Booking/Ticket';
import Seat from '../../components/Booking/Seat';
import Payment from '../../components/Booking/Payment';

class BookingPage extends Component {
  render() {
    const { match, showTicket, showPayment, showSeat } = this.props;
    const { slug } = match.params;
    return(
      <div>
        <Navbar slug={slug} />
        <Container className="my-5 text-light">
          <Row className="mx-0">
            <Col xs="12" lg="7" className="px-0">
              <BookingInfo />
              {/* custom */}
              { showTicket && <Ticket /> }
              { showSeat && <Seat />}
              { showPayment && <Payment />}
            </Col>
            <Col xs="12" lg={{ size: 4, offset: 1}} className="d-flex flex-column">
              <Purchase />
            </Col>
          </Row>
        </Container>
      </div> 
    )
  }
}

// Object.keys(obj).length;

const mapStateToProps = state => ({
  showTicket: state.movies.booking.isShowTicket,
  showSeat: state.movies.booking.isShowSeat,
  showPayment: state.movies.booking.isShowPayment
})

export default connect(mapStateToProps, null)(BookingPage);
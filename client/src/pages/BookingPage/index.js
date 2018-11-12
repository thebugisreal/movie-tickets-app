import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../../components/Booking/Navbar';
import BookingInfo from '../../components/Booking/BookingInfo';
import Ticket from '../../components/Booking/Ticket';
import Purchase from '../../components/Booking/Purchase';

class BookingPage extends Component {
  render() {
    const { match } = this.props;
    const { slug } = match.params;
    return(
      <div>
        <Navbar slug={slug} />
        <Container className="my-5 text-light">
          <Row className="mx-0">
            <Col xl="7" className="pl-0">
              <BookingInfo />
              {/* custom */}
              <Ticket />
            </Col>
            <Col xl={{ size: 4, offset: 1}} className="d-flex flex-column">
              <Purchase />
            </Col>
          </Row>
        </Container>
      </div> 
    )
  }
}

// a.toLocaleString('de-DE');

export default BookingPage;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTicket, addCombo, subtractTicket, subtractCombo, showSeat } from '../../actions/movieActions';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Ticket extends Component {
  render() {
    const { movie, tickets, combo } = this.props;
    return(
      <div className="mb-4">
        <Row className="mx-0 py-4">
          <Col xs="4" md="5" xl="4" className="pl-0 d-flex flex-column justify-content-center">
            <p>Vé người lớn</p>
            <p className="text-white-50">(vé 2D)</p>
          </Col>
          <Col xs="3" md="2" xl="4" className="d-flex justify-content-center align-items-center">
            <p className="text-info">{ movie.price.toLocaleString('de-DE') }</p>
          </Col>
          <Col xs="5" md="5" xl="4" className="d-flex pr-0 justify-content-end align-items-center">
            <button 
              onClick={ () => this.props.subtractTicket() }
              className="bookingPage__btn border-0 position-relative font-weight-bold"
            >
              -
            </button>
            <div className="bookingPage__count bg-white text-dark d-flex justify-content-center align-items-center">
              { tickets }
            </div>
            <button 
              onClick={ () => this.props.addTicket() }
              className="bookingPage__btn pr-0 border-0 position-relative font-weight-bold"
            >
              +
            </button>
          </Col>
        </Row>
        <Row className="mx-0 py-4">
          <Col xs="4" md="5" xl="4" className="pl-0 d-flex flex-column justify-content-center">
            <p>Combo 1</p>
            <p className="text-white-50">(1 Bắp + 1 Nước)</p>
          </Col>
          <Col xs="3" md="2" xl="4" className="d-flex justify-content-center align-items-center">
            <p className="text-info">40.000</p>
          </Col>
          <Col xs="5" md="5" xl="4" className="d-flex pr-0 justify-content-end align-items-center">
            <button 
              onClick={ () => this.props.subtractCombo() }
              className="bookingPage__btn border-0 position-relative font-weight-bold"
            >
              -
            </button>
            <div className="bookingPage__count bg-white text-dark d-flex justify-content-center align-items-center">
              { combo }
            </div>
            <button 
              onClick={ () => this.props.addCombo() }
              className="bookingPage__btn pr-0 border-0 position-relative font-weight-bold"
            >
              +
            </button>
          </Col>
        </Row>
        <div className="py-4 border-bottom border-secondary">
          <Button onClick={ () => this.props.showSeat() } color="danger">
            <span className="mr-2">Chọn Ghế</span>
            <FontAwesomeIcon icon="arrow-right" />
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movies.booking.chooseMovie,
  tickets: state.movies.booking.tickets,
  combo: state.movies.booking.combo
})

export default connect(mapStateToProps, { addTicket, addCombo, subtractTicket, subtractCombo, showSeat })(Ticket);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import { withRouter } from 'react-router'
import ReactLoading from 'react-loading';

import { checkout, addAmount, movieLoading } from '../../actions/movieActions';

class Purchase extends Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.hasCheckout === true) {
      this.props.history.push('/checkout')
    }
  }

  handleSubmit = () => {
    this.props.movieLoading();
    const { movie, cinema, date, time, tickets, combo, getSeat } = this.props;

    const amount = tickets*movie.price + combo*40000;
    this.props.addAmount(amount)

    let indexOfCinema = movie.cinema.findIndex(e => e.name === cinema.name);
    let indexOfDate = movie.cinema[indexOfCinema].info.findIndex(e => e.date === date.date);
    let indexOfTime = movie.cinema[indexOfCinema].info[indexOfDate].ticket.findIndex(e => e.time === time.time);

    let checkSeat = movie.cinema[indexOfCinema].info[indexOfDate].ticket[indexOfTime].seat.map(item => {
      if(getSeat.includes(item.name)) {
        return {
          name: item.name,
          status: true
        }
      }
      return item;
    })

    const result = {...movie};
    result.cinema[indexOfCinema].info[indexOfDate].ticket[indexOfTime].seat = checkSeat;

    this.props.checkout(JSON.stringify({
      id: result._id,
      cinema: result.cinema
    }));
  }

  render() {
    const { movie, tickets, combo, getSeat, isLoading } = this.props;
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
        <Button onClick={ this.handleSubmit } className="w-100" color="danger">
          { isLoading && <ReactLoading className="d-inline-block mr-2" type={'spin'} color={'#fff'} height={'20px'} width={'20px'} /> }
          <span>HOÀN TẤT ĐƠN HÀNG</span>
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movies.booking.chooseMovie,
  cinema: state.movies.booking.chooseCinema,
  date: state.movies.booking.chooseDate,
  time: state.movies.booking.chooseTime,
  tickets: state.movies.booking.tickets,
  combo: state.movies.booking.combo,
  getSeat: state.movies.booking.chooseSeat,
  hasCheckout: state.movies.booking.hasCheckout,
  isLoading: state.movies.isLoading
})

export default withRouter(connect(mapStateToProps, { checkout, addAmount, movieLoading })(Purchase));
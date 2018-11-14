import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Seat extends Component {

  // showSeat(seat) {
  //   let html = [];
  //   for (var i in seat) {
  //     if (i === 'A01' || i === 'B01' || i === 'C01') {
  //       html.push(`<Col xl={ size: 1, offset: 1 }>${i} & ${seat[i]}</Col>`)
  //     } else {
  //       html.push(`<Col xl="1">${i} & ${seat[i]}</Col>`)
  //     }
  //   }
  //   return console.log(Parser(html.join('')));
  // }

  render() {
    const { seat } = this.props;
    return(
      <Row className="px-2 py-4">
        { seat.map((item, index) => (
          <Col xl="1" key={ index } className="py-2 px-2">
            <div 
              className={`${classnames({ deactive: item.status === true })} bookingPage__seat d-flex justify-content-center align-items-center rounded`}
            >
              { item.name }
            </div>
          </Col>
        )) }
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  seat: state.movies.booking.seat
})

export default connect(mapStateToProps, null)(Seat);
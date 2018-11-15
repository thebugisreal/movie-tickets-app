import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseSeat } from '../../actions/movieActions';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Seat extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.props.chooseSeat(name);
  }

  checkActive(name) {
    if(this.props.getSeat.includes(name)) return true;
    return false;
  }

  render() {
    const { seat } = this.props;
    return(
      <Row className="px-2 py-4">
        { seat.map((item, index) => (
          <Col xl="1" key={ index } className="py-2 px-2">
            <div 
              onClick={ () => this.handleClick(item.name) }
              className={`${classnames({ deactive: item.status === true, active: this.checkActive(item.name) })} bookingPage__seat d-flex justify-content-center align-items-center rounded`}
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
  seat: state.movies.booking.seat,
  getSeat: state.movies.booking.chooseSeat
})

export default connect(mapStateToProps, { chooseSeat })(Seat);
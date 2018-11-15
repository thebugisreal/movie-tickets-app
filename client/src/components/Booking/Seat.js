import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseSeat } from '../../actions/movieActions';
// import { Row, Col } from 'reactstrap';
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
      <div className="py-4 bookingPage__container">
        { seat.map((item, index) => (
          <div 
            key={ index } 
            className="bookingPage__col py-1 px-1 d-inline-block py-md-2 px-md-2"
            >
            <div 
              onClick={ () => this.handleClick(item.name) }
              className={`${classnames({ deactive: item.status === true, active: this.checkActive(item.name) })} bookingPage__seat d-flex justify-content-center align-items-center rounded`}
            >
              { item.name }
            </div>
          </div>
        )) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  seat: state.movies.booking.seat,
  getSeat: state.movies.booking.chooseSeat
})

export default connect(mapStateToProps, { chooseSeat })(Seat);
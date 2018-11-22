import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { chooseSeat, showPayment } from '../../actions/movieActions';
import { toggleMenu } from '../../actions/userActions';
import { showMessage } from '../../actions/messageActions';
import { ERR_CHOOSE_SEAT } from '../../constants/messageTypes';

class Seat extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleClick(name, active) {
    if(!active) return this.props.chooseSeat(name);
  }
    

  checkActive(name) {
    if(this.props.getSeat.includes(name)) return true;
    return false;
  }

  handleNext() {
    if(this.props.tickets !== this.props.getSeat.length) return this.props.showMessage({ message: ERR_CHOOSE_SEAT, type: 'danger'});
    if(!this.props.logged) return this.props.toggleMenu();
    return this.props.showPayment();
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
              onClick={ () => this.handleClick(item.name, item.status) }
              className={`${classnames({ deactive: item.status === true, active: this.checkActive(item.name) })} bookingPage__seat d-flex justify-content-center align-items-center rounded`}
            >
              { item.name }
            </div>
          </div>
        )) }
        <div className="py-4 border-bottom border-secondary">
          <Button onClick={ this.handleNext } color="danger">
            <span className="mr-2">Thanh Toán</span>
            <FontAwesomeIcon icon="arrow-right" />
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  seat: state.movies.booking.seat,
  tickets: state.movies.booking.tickets,
  getSeat: state.movies.booking.chooseSeat,
  logged: state.users.logged
})

export default connect(mapStateToProps, { chooseSeat, showPayment, toggleMenu, showMessage })(Seat);
import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Cinema extends Component {
	constructor(props) {
    super(props);
    this.state = {
      styleName: {
        transform: 'translate(0,0) scale(1)',
        color: '#333'
      },
      styleMenu: false,
      styleMouse: {
        cursor: 'not-allowed'
      },
      text: ''
    };
    this.showMenu = this.showMenu.bind(this);
    this.chooseCinema = this.chooseCinema.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.movie !== prevProps.movie) {
      this.setState({
        styleName: {
          transform: 'translate(0,0) scale(1)',
          color: '#969696'
        },
        styleMouse: {
          cursor: 'pointer'
        },
        text: ''
      })
    }
  }

  showMenu() {
    if(this.props.active) {
      this.setState({
        styleName : {
          transform: 'translate(-5px,-20px) scale(.8)',
          color: '#ab8000'
        },
        styleMenu: !this.state.styleMenu
      })
    }
  }

  chooseCinema(data) {
    this.setState({
      text: data,
      styleMenu: !this.state.styleMenu
    })
    this.props.onReceiveCinema(data);
  }

  render() {
    let data = '';
    if (this.props.active) {
      data = this.props.movie[0].cinema.map((item, index) => (
        <li key={index} onClick={ () => this.chooseCinema(item.name) } className="quickBooking__list">{item.name}</li>
      ));
    }
    
    return (
    	<Col md="2" className="quickBooking__booth d-flex align-items-center position-relative">
        <span
          className="quickBooking__name position-absolute"
          style={ this.state.styleName }
        >
          Tên Rạp
        </span>
        <span
          className="w-75 quickBooking__text position-relative d-flex"
          style={ this.state.styleMouse }
          onClick={ this.showMenu }
        >
          { this.state.text }
          <div 
            className="position-absolute quickBooking__line"
            style={ this.state.styleMenu === true ? { width: '100%' } : { width: '0' } }
          ></div>
        </span>
        <div 
          className="quickBooking__menu position-absolute"
          style={ this.state.styleMenu === true ? { opacity: '1', display: 'block' } : { opacity: '0', display: 'none' } }
        >
          <ul> {data} </ul>
        </div>
      </Col>
    );
  }
}

export default Cinema;
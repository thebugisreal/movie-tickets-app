import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Time extends Component {
	constructor(props) {
    super(props);
    this.state = {
      styleName: {
        transform: 'translate(0,0) scale(1)',
        color: '#333'
      },
      styleMouse: { cursor: 'not-allowed' },
      menu: false,
      styleMenu: false,
      text: ''
    };
    this.showMenu = this.showMenu.bind(this);
    this.chooseTime = this.chooseTime.bind(this);    
  }

  showMenu() {
    if(this.state.menu) {
      this.setState({
        styleName : {
          transform: 'translate(-5px,-20px) scale(.8)',
          color: '#ab8000'
        },
        styleMenu: !this.state.styleMenu
      })
    }
  }

  chooseTime(data) {
    this.setState({
      text: data,
      styleMenu: !this.state.styleMenu
    })
    this.props.onReceiveTime(data);
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.setState({
        styleName: { color: '#969696' },
        styleMouse: { cursor: 'pointer' },
        menu: true,
        text: ''
      })
    }
  }

  render() {
    let data = '';
    if (this.state.menu) {
      data = this.props.date[0].times.map((item, index) => (
        <li key={index} onClick={ () => this.chooseTime(item.time) } className="quickBooking__list">{item.time}</li>
      ));
    }
    return (
      <Col sm="2" className="quickBooking__booth d-flex align-items-center position-relative">
        <span className="quickBooking__name position-absolute" style={ this.state.styleName }>
          Xuất Chiếu
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

export default Time;
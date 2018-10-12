import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Cinema extends Component {
	constructor(props) {
    super(props);
    this.state = {
      styleName : {
        transform: 'translate(0,0) scale(1)',
        color: '#969696'    
      },
      styleMenu: false
    };
    this.onTextClick = this.onTextClick.bind(this);
  }

  onTextClick() {
    this.setState({
      styleName : {
        transform: 'translate(-5px,-20px) scale(.8)',
        color: '#ab8000'
      },
      styleMenu: !this.state.styleMenu
    })
  }

  render() {
    return (
    	<Col sm={{ size: 2, offset: 1 }} className="quickBooking__booth d-flex align-items-center position-relative">
        <span 
          className="quickBooking__name position-absolute"
          style={ this.state.styleName }
        >Tên Rạp
        </span>
        <span
          className="w-75 quickBooking__text position-relative d-flex justify-content-center"
          style={{ cursor: 'pointer' }}
          onClick={ this.onTextClick }
        >
          <div 
            className="position-absolute quickBooking__line"
            style={ this.state.styleMenu === true ? { width: '100%' } : { width: '0' } }
          ></div>
        </span>
        <div 
          className="quickBooking__menu position-absolute"
          style={ this.state.styleMenu === true ? { opacity: '1' } : { opacity: '0' } }
        >
          <ul>
            <li className="quickBooking__list">
              CGV Vincom Đồng Khởi
            </li>
            <li className="quickBooking__list">
              CGV Vincom Vò Gấp
            </li>
            <li className="quickBooking__list">
              CGV Thảo Điền Pearl
            </li>
            <li className="quickBooking__list">
              CGV Golden Plaza
            </li>
            <li className="quickBooking__list">
              CGV Sư Vạn Hạnh
            </li>
          </ul>
        </div>
      </Col> 
    );
  }
}

export default Cinema;
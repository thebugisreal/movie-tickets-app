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
      styleMenu: false,
      text: '',

    };
    this.onTextClick = this.onTextClick.bind(this);
    this.setChooseValue = this.setChooseValue.bind(this);
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

  setChooseValue(value) {
    this.props.onReceiveCinema(value);
    let data = '';
    switch(value) {
      case 1:
        data = 'CGV Vincom Đồng Khởi'
        break;
      case 2:
        data = 'CGV Vincom Vò Gấp'
        break;
      case 3:
        data = 'CGV Thảo Điền Pearl'
        break;
      case 4:
        data = 'CGV Golden Plaza'
        break;
      case 5:
        data = 'CGV Sư Vạn Hạnh'
        break;
      default:
        data = ''
    }
    this.setState({
      text: data,
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
          className="w-75 quickBooking__text position-relative d-flex"
          style={{ cursor: 'pointer' }}
          onClick={ this.onTextClick }
        >
          { this.state.text }
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
            <li className="quickBooking__list" onClick={ () => this.setChooseValue(1) }>
              CGV Vincom Đồng Khởi
            </li>
            <li className="quickBooking__list" onClick={ () => this.setChooseValue(2) }>
              CGV Vincom Vò Gấp
            </li>
            <li className="quickBooking__list" onClick={ () => this.setChooseValue(3) }>
              CGV Thảo Điền Pearl
            </li>
            <li className="quickBooking__list" onClick={ () => this.setChooseValue(4) }>
              CGV Golden Plaza
            </li>
            <li className="quickBooking__list" onClick={ () => this.setChooseValue(5) }>
              CGV Sư Vạn Hạnh
            </li>
          </ul>
        </div>
      </Col> 
    );
  }
}

export default Cinema;
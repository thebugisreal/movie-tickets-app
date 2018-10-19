import React, { Component } from 'react';
import { Col } from 'reactstrap';

class Movie extends Component {
	constructor(props) {
    super(props);
    this.state = {
      styleName : {
        transform: 'translate(0,0) scale(1)',
        color: '#969696'    
      },
      styleMenu: false,
      text: ''
    }

    this.showMenu = this.showMenu.bind(this);
    this.chooseMovie = this.chooseMovie.bind(this);
  }

  showMenu() {
    this.setState({
      styleName : {
        transform: 'translate(-5px,-20px) scale(.8)',
        color: '#ab8000'
      },
      styleMenu: !this.state.styleMenu
    })
  }

  chooseMovie(data) {
    this.setState({
      text: data,
      styleMenu: !this.state.styleMenu
    })
    this.props.onReceiveMovie(data);
  }

  render() {
    const movie = this.props.movieName.map((item, index) => (
      <li key={index} onClick={ () => this.chooseMovie(item) } className="quickBooking__list">{item}</li>
    ))
    return (
      <Col sm={{ size: 2, offset: 1 }} className="quickBooking__booth d-flex align-items-center position-relative">
        <span className="quickBooking__name position-absolute" style={ this.state.styleName }>
          Tên Phim
        </span>
        <span
          className="w-75 quickBooking__text position-relative d-flex"
          style={{ cursor: 'pointer' }}
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
          <ul> { movie } </ul>
        </div>
      </Col> 
    );
  }
}

export default Movie;
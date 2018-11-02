import React, { Component } from 'react';

class Select extends Component {
	constructor(props) {
    super(props);
    this.state = {
      styleMenu: false,
      styleName: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.onChoose = this.onChoose.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // compare two arrays
    return JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data) || this.state.styleMenu !== nextState.styleMenu || this.state.styleName !== nextState.styleName || this.props.name !== nextProps.name;
  }

  showMenu() {
    if(this.props.data.length !== 0) {
      this.setState({
        styleName: true,
        styleMenu: !this.state.styleMenu
      })
    }
  }

  onChoose(data) {
    this.setState({
      styleMenu: !this.state.styleMenu
    })
    this.props.onReceive(data);
  }

  showData() {
    return(
      this.props.data.map((item, index) => (
        <li key={index} onClick={ () => this.onChoose(item) } className="quickBooking__list">{item}</li>
      ))
    )
  }

  render() {
    return (
    	<div className="w-100 mt-2">
        <span
          className="quickBooking__name position-absolute"
          style={ this.state.styleName && this.props.data.length !== 0 ? { transform: 'translate(-5px,-12px) scale(.8)', color: '#ab8000' } : { transform: 'translate(0,0) scale(1)', color: '#333' } }
        >
          { this.props.title }
        </span>
        <span
          className="quickBooking__text position-relative d-flex"
          style={ this.props.data.length !== 0 ? { cursor: 'pointer' } : { cursor: 'not-allowed' } }
          onClick={ this.showMenu }
        >
          { this.props.name }
          <div 
            className="position-absolute quickBooking__line"
            style={ this.state.styleMenu === true ? { width: '100%' } : { width: '0' } }
          ></div>
        </span>
        {/* Menu: START */}
        <div 
          className="quickBooking__menu position-absolute"
          style={ this.state.styleMenu === true ? { opacity: '1', display: 'block' } : { opacity: '0', display: 'none' } }
        >
          <ul>
            { this.props.data.length !== 0 ? this.showData() : '' } 
          </ul>
        </div>
        {/* Menu: END */}
      </div>
    );
  }
}

export default Select;
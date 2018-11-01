import React, { Component } from 'react';

class Select extends Component {
	constructor(props) {
    super(props);
    this.state = {
      styleMenu: false,
      styleName: false,
      text: ''
    };

    this.showMenu = this.showMenu.bind(this);
    this.onChoose = this.onChoose.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // compare two arrays
    return JSON.stringify(this.props.data) !== JSON.stringify(nextProps.data) || this.state.styleMenu !== nextState.styleMenu || this.state.text !== nextState.text || this.state.styleName !== nextState.styleName;
  }

  showMenu() {
    if(this.props.active) {
      this.setState({
        styleName: true,
        styleMenu: !this.state.styleMenu
      })
    }
  }

  onChoose(data) {
    this.setState({
      text: data,
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
          style={ this.state.styleName ? { transform: 'translate(-5px,-12px) scale(.8)', color: '#ab8000' } : { transform: 'translate(0,0) scale(1)', color: '#333' } }
        >
          { this.props.title }
        </span>
        <span
          className="quickBooking__text position-relative d-flex"
          style={ this.props.active === true ? { cursor: 'pointer' } : { cursor: 'not-allowed' } }
          onClick={ this.showMenu }
        >
          { this.state.text }
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
            { this.props.data.length === 0 ? '' : this.showData() } 
          </ul>
        </div>
        {/* Menu: END */}
      </div>
    );
  }
}

export default Select;
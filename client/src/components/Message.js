import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { closeMessage } from '../actions/messageActions';

class Message extends React.Component {
  turnOff() {
    setTimeout(() => {
      this.props.closeMessage();
    }, 3000)
  }
  render() {
    const { message, type, isShowMessage } = this.props;
    const scroll = window.scrollY + 50;
    this.turnOff();
    return (
      <div 
        className={`${classnames({'alert-danger': type === 'danger', 'alert-success': type === 'success'})} alert message position-absolute`}
        style={ isShowMessage ? { top: scroll, opacity: 1 } : { top: 0, opacity: 0 }}
      >
        { message }
        <button 
          className={`${classnames({'text-danger': type === 'danger', 'text-success': type === 'success'})} close position-relative ml-3`}
          style={{ top: '-2px' }}
          onClick={ this.props.closeMessage } 
          type="button" 
          
        >
          <span>&times;</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message.message,
  type: state.message.type,
  isShowMessage: state.message.isShowMessage
})

export default connect(mapStateToProps, { closeMessage })(Message);
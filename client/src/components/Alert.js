import React from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { closeMessage } from '../actions/messageActions';

class AlertComponent extends React.Component {
  render() {
    const { errorMessage, isShowError } = this.props;
    return (
      <Alert color="danger" fade={false} className="customAlert position-absolute" isOpen={isShowError} toggle={() => this.props.closeMessage()}>
        {errorMessage}
      </Alert>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.message.errorMessage,
  isShowError: state.message.isShowError
})

export default connect(mapStateToProps, { closeMessage })(AlertComponent);
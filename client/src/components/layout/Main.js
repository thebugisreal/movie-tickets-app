import React, { Component } from 'react';
import { Alert, Container } from 'reactstrap';

import Slider from '../Slider';

class Main extends Component {
  render() {
    return (
      <div>
      <Container>
        <Slider />
        <Alert color="primary">
          This is a primary alert — check it out!
        </Alert>
        <Alert color="secondary">
          This is a secondary alert — check it out!
        </Alert>
        <Alert color="success">
          This is a success alert — check it out!
        </Alert>
        <Alert color="danger">
          This is a danger alert — check it out!
        </Alert>
        <Alert color="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert color="info">
          This is a info alert — check it out!
        </Alert>
        <Alert color="light">
          This is a light alert — check it out!
        </Alert>
        <Alert color="dark">
          This is a dark alert — check it out!
        </Alert>
      </Container>
      </div>
      );
  }
}

export default Main;
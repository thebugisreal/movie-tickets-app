import React from 'react';
import { Container } from 'reactstrap';

export default () => {
  return(
    <div className="notFound w-100 h-100 py-5">
      <Container className="d-flex justify-content-center align-items-center">
        <img className="w-100" src="/static/notfound.png" alt="404 Not Found!" />
      </Container>
    </div>
  )
}
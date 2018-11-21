import React, { Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
  return(
    <Fragment>
      <Row>
        <Col className="my-4 d-flex position-relative justify-content-center align-items-center">
          <div className="position-absolute customNav__line"></div>
          <span className="text-light customNav__or">OR</span>
        </Col>
      </Row>
      <Row>
        <Col xs="6" className="pr-2">
          <Button className="w-100" color="primary">
            <FontAwesomeIcon className="mr-2" icon={['fab', 'facebook-f']} />
            Facebook
          </Button>
        </Col>
        <Col xs="6" className="pl-2">
          <Button className="w-100" color="secondary">
            <FontAwesomeIcon className="mr-2" icon={['fab', 'github']} />
            Github
          </Button>
        </Col>
      </Row>
    </Fragment>
  )
}
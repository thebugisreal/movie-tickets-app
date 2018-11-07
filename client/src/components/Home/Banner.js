import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <Container className="d-flex justify-content-center align-items-center py-3 py-sm-4 py-xl-5">
          <Link to={ this.props.url } className="w-100">
            <div className="banner__image w-100 d-flex justify-content-center align-items-center position-relative">
                <img className="w-100" src={ this.props.img } alt={ this.props.title } />
            </div>
          </Link>
        </Container>
      </div>
    )
  }
}

export default Banner;
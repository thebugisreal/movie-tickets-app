import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Posts extends Component {
  render() {
    return (
      <div className="page-movies py-4">
        <Container>
          <Row className="mb-2">
            <Col>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="active breadcrumb-item" aria-current="page">
                Posts
              </li>
            </Breadcrumb>
            </Col>
          </Row>
          <Row>
          { this.props.posts.map(item => (
            <Col key={item._id} xs="6" sm="4" lg="3">
              <a className="d-flex flex-column" href="https://google.com" title={ item.title }>
                <img className="w-100" src={ item.thumbnail } alt={ item.title } />
                <p className="my-3"><FontAwesomeIcon className="mr-2" icon={['far', 'calendar-alt']} /> { item.timeLimit }</p>
              </a>
            </Col>
          )) }
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
  //------state.[movieAction.js].[movieReducer.js]
});

export default connect(mapStateToProps, null)(Posts);
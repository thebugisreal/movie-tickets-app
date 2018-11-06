import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Posts extends Component {

  showPosts() {
    const {match} = this.props;
    const {url} = match;
    return(
       this.props.posts.map(item => (
        <Col key={item._id} xs="6" sm="4" lg="3">
          <Link to={`${url}/${item.slug}`} className="d-flex flex-column">
            <img className="w-100" src={ item.thumbnail } alt={ item.title } />
            <p className="my-3"><FontAwesomeIcon className="mr-2" icon={['far', 'calendar-alt']} /> { item.timeLimit }</p>
          </Link>
        </Col>
      ))
    )
  }

  render() {
    return (
      <div className="bg-custom py-4">
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
            { this.showPosts() }
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
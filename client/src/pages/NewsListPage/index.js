import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NewsListPage extends Component {
  showContent() {
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
      <div className="page py-4">
        <Container>
          <Row className="mb-2">
            <Col>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="active breadcrumb-item" aria-current="page">
                Tin mới &amp; Ưu đãi
              </li>
            </Breadcrumb>
            </Col>
          </Row>
          <Row>
            { this.showContent() }
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, null)(NewsListPage);
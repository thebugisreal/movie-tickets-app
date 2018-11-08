import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb } from 'reactstrap';
import Parser from 'html-react-parser';

class NewsPage extends Component {
  showContent() {
    const { match } = this.props;
    const { slug } = match.params;
    const post = this.props.posts.filter(item => item.slug === slug)[0];
    return(
      <div>
        <Row className="mb-2 page">
          <Col>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/news">Tin mới &amp; Ưu đãi</Link>
              </li>
              <li className="active breadcrumb-item" aria-current="page">
                { post.title }
              </li>
            </Breadcrumb>
          </Col>
        </Row>
        <div className="page__body">
          <Row>
            <Col className="mb-2"><h2>{ post.title }</h2></Col>
          </Row>
          <Row>
            <Col xs="12" sm="6" xl="4"><img className="mb-2 mb-sm-4 w-100" src={ post.image } alt={ post.title } /></Col>
            <Col xs="12" sm="6" xl="8">{ Parser(post.body) }</Col>
          </Row>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div className="bg-custom py-4">
        <Container>
          { this.props.posts.length !== 0 ? this.showContent() : '' }
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, null)(NewsPage);
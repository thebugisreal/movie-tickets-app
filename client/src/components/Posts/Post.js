import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb } from 'reactstrap';

class Post extends Component {

  showContent() {
    const { match } = this.props;
    const { slug } = match.params;
    const post = this.props.posts.filter(item => item.slug === slug)[0];
    return(
      <div>
        <Row className="mb-2">
          <Col>
          <Breadcrumb>
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/posts">Posts</Link>
            </li>
            <li className="active breadcrumb-item" aria-current="page">
              { post.title }
            </li>
          </Breadcrumb>
          </Col>
        </Row>
      { post.title }
      </div>
    )
  }

  render() {
    return(
      <div className="page-post bg-custom py-4">
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

export default connect(mapStateToProps, null)(Post);
// export default Post;
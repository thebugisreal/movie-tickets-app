import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Breadcrumb } from 'reactstrap';

class MovieListPage extends Component {
  render() {
    return (
      <div className="movieListPage page py-4">
        <Container>
          <Row className="mb-2">
            <Col>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="active breadcrumb-item" aria-current="page">
                Phim đang chiếu
              </li>
            </Breadcrumb>
            </Col>
          </Row>
          <Row>
          { this.props.movies.map(item => (
            <Col key={item._id} xs="6" sm="4" lg="3" className="d-flex flex-column position-relative">
              <span
                className="movie__rating movie__rating--fix position-absolute"
                style={ { backgroundPosition: item.rated.position } }
              >
                { item.rated.name }
              </span>
              <a href="https://google.com" title={ item.name }><img className="w-100" src={ item.thumbnail } alt={ item.name } /></a>          
              <div>
                <h2 className="movieListPage__title pt-2"><a href="https://google.com" title={ item.name }>{ item.name }</a></h2>
                <p className="movieListPage__decs mb-1"><b>Thể loại: </b>{ item.genre.join(', ') }</p>
                <p className="movieListPage__decs mb-1"><b>Thời lượng: </b>{ item.runningTime }</p>
                <p className="movieListPage__decs mb-3"><b>Khởi chiếu: </b>{ item.releaseDate }</p>
              </div>
            </Col>
          )) }
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items
});

export default connect(mapStateToProps, null)(MovieListPage);
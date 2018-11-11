import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { chooseMovie, chooseCinema, chooseDate, chooseTime } from '../../actions/movieActions';
import { Row, Col } from 'reactstrap';

class ShowTimes extends Component {

  componentWillMount() {
    this.props.chooseMovie(this.props.movie.name);
  }

  render(){
    return(
      <Row className="d-none d-md-block">
        <Col xl={{ size: 10, offset: 1 }}>
          <h4 className="text-light mb-4 border-left pl-3 d-flex align-items-center pb-1">LỊCH CHIẾU PHIM</h4>
          <Row className="border-top border-right border-left border-secondary mx-0">
            <Col 
              md="6" 
              className="moviePage__table--title d-flex justify-content-center"
            >
              CHỌN RẠP CHIẾU
            </Col>
            <Col 
              md="3" 
              className="moviePage__table--title d-flex justify-content-center"
            >
              CHỌN NGÀY CHIẾU
            </Col>
            <Col 
              md="3" 
              className="moviePage__table--title d-flex justify-content-center"
            >
              CHỌN XUẤT CHIẾU
            </Col>
          </Row>
          <Row className="border border-secondary mx-0">
            <Col md="6">
              { this.props.listCinema.length !== 0 && this.props.listCinema.map((item, index) =>(
                <div 
                  className="moviePage__table--list text-light border-bottom" 
                  onClick={ () => this.props.chooseCinema(item) } 
                  key={ index }
                >
                  { item }
                </div>
              )) }
            </Col>
            <Col md="3" className="border-left border-right border-secondary">
              { this.props.listDate.length !== 0 && this.props.listDate.map((item, index) => (
                <div 
                  className="moviePage__table--list text-light border-bottom" 
                  onClick={ () => this.props.chooseDate(item) } 
                  key={ index }
                >
                  { item }
                </div>
              )) }
            </Col>
            <Col md="3">
              { this.props.listTime.length !== 0 && this.props.listTime.map((item, index) => (
                <div 
                  className="moviePage__table--list text-light border-bottom" 
                  onClick={ () => this.props.chooseTime(item) } 
                  key={ index }
                >
                  <Link to={`/movies/${this.props.movie.slug}/booking`}>{ item }</Link>
                </div>
              )) }
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  listCinema: state.movies.booking.listCinema,
  listDate: state.movies.booking.listDate,
  listTime: state.movies.booking.listTime
})

export default connect(mapStateToProps, { chooseMovie, chooseCinema, chooseDate, chooseTime })(ShowTimes);
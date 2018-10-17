import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieActions';

class Movie extends Component {
	// constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    this.props.fetchMovies();
  }

  render() {
    const movieItems = this.props.movies.map(item => (
      <div key={item._id}>
        <h3>{item.name}</h3>
      </div>
    ));

    return (
    	<Col sm="2" className="quickBooking__booth d-flex align-items-center position-relative">
        Tên Phim
        { movieItems }
        <span className="w-75 quickBooking__text position-absolute"></span>
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items
});

export default connect(mapStateToProps, { fetchMovies })(Movie);
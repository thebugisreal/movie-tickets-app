import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieActions';
import { Container, Row } from 'reactstrap';
import Title from './Title';
import Cinema from './Cinema';
import Movie from './Movie';
import Date from './Date';
import Time from './Time';

class QuickBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      movieActive: false
    };

    this.onSetMovie = this.onSetMovie.bind(this);
  }

  componentWillMount() {
    this.props.fetchMovies();
  }

  onSetMovie(movie) {
    const data = this.props.movies.filter(item => item.name === movie);
    this.setState({
      data: data,
      movieActive: true
    })
  }

  render() {
    const movieName = this.props.movies.map(item => item.name);
    return (
      <section className="quickBooking position-relative">
        <Container>
          <Row>
            <Title />
            <Movie movieName={movieName} onReceiveMovie={ this.onSetMovie } />
            <Cinema movie={ this.state.data } active={ this.state.movieActive } />
            <Date />
            <Time />
          </Row>
        </Container>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items
  //------state[movieAction.js][movieReducer.js]
});

export default connect(mapStateToProps, { fetchMovies })(QuickBooking);
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
      movie: [],
      movieActive: false,
      cinema: [],
      cinemaActive: false,
      date: [],
      dateActive: false,
      time: [],
      timeActive: false 
    };

    this.onSetMovie = this.onSetMovie.bind(this);
    this.onSetCinema = this.onSetCinema.bind(this);
    this.onSetDate = this.onSetDate.bind(this);
    this.onSetTime = this.onSetTime.bind(this);
  }

  // fetch data from redux
  componentWillMount() {
    this.props.fetchMovies();
  }

  onSetMovie(movie) {
    const data = this.props.movies.filter(item => item.name === movie);
    this.setState({
      movie: data,
      movieActive: true,
      cinemaActive: false,
      dateActive: false,
      timeActive: false
    });
  }

  onSetCinema(cinema) {
    const data = this.state.movie[0].cinema.filter(item => item.name === cinema );
    this.setState({
      cinema: data,
      cinemaActive: true,
      movieActive: false
    });
  }

  onSetDate(date) {
    const data = this.state.cinema[0].info.filter(item => item.date === date );
    this.setState({
      date: data,
      dateActive: true,
      cinemaActive: false
    });
  }

  onSetTime(time) {
    const data = this.state.date[0].times.filter(item => item.time === time );
    this.setState({
      time: data,
      timeActive: true,
      dateActive: false
    });
  }

  render() {
    const movieName = this.props.movies.map(item => item.name);
    return (
      <section className="quickBooking position-relative">
        <Container>
          <Row>
            <Title />
            <Movie movieName={movieName} onReceiveMovie={ this.onSetMovie } />
            <Cinema movie={ this.state.movie } active={ this.state.movieActive } onReceiveCinema={ this.onSetCinema }  />
            <Date cinema={ this.state.cinema } active={ this.state.cinemaActive } onReceiveDate={ this.onSetDate } />
            <Time date={ this.state.date } active={ this.state.dateActive } onReceiveTime={ this.onSetTime } />
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
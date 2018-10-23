import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movieActions';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Title from './Title';
import Cinema from './Cinema';
import Movie from './Movie';
import Date from './Date';
import Time from './Time';

class QuickBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      movie: [],
      movieActive: false,
      cinema: [],
      cinemaActive: false,
      date: [],
      dateActive: false,
      time: []
    };

    this.onSetMovie = this.onSetMovie.bind(this);
    this.onSetCinema = this.onSetCinema.bind(this);
    this.onSetDate = this.onSetDate.bind(this);
    this.onSetTime = this.onSetTime.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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
      dateActive: false
    });
  }

  onSetCinema(cinema) {
    const data = this.state.movie[0].cinema.filter(item => item.name === cinema );
    this.setState({
      cinema: data,
      cinemaActive: true,
      dateActive: false
    });
  }

  onSetDate(date) {
    const data = this.state.cinema[0].info.filter(item => item.date === date );
    this.setState({
      date: data,
      dateActive: true
    });
  }

  onSetTime(time) {
    const data = this.state.date[0].times.filter(item => item.time === time );
    this.setState({
      time: data
    });
    console.log(`Do something with Data`);
  }

  handleToggle() {
    this.setState({
      isToggle: !this.state.isToggle
    })
  }

  render() {
    const movieName = this.props.movies.map(item => item.name);
    return (
      <section className="quickBooking position-relative">
        <Container>
          <Row>
            <Col lg="2" md="3" className="position-relative px-0 px-sm-3">
              <span 
                className="quickBooking__title d-flex align-items-center justify-content-center justify-content-sm-start font-weight-bold"
                onClick={ this.handleToggle }
              >
                ĐẶT VÉ NHANH
                <div className="quickBooking__slash position-absolute h-100 d-none d-sm-block"></div>
              </span>
            </Col>
            <Col md={{ size: 2, offset: 1 }} className="quickBooking__booth d-none d-sm-flex align-items-center position-relative">
              <Movie movieName={movieName} onReceiveMovie={ this.onSetMovie } />
            </Col>
            <Col md="2" className="quickBooking__booth d-none d-sm-flex align-items-center position-relative">
              <Cinema movie={ this.state.movie } active={ this.state.movieActive } onReceiveCinema={ this.onSetCinema }  />
            </Col>
            <Col md="2" className="quickBooking__booth d-none d-sm-flex align-items-center position-relative">
              <Date cinema={ this.state.cinema } active={ this.state.cinemaActive } onReceiveDate={ this.onSetDate } />
            </Col>
            <Col md="2" className="quickBooking__booth d-none d-sm-flex align-items-center position-relative">
              <Time date={ this.state.date } active={ this.state.dateActive } onReceiveTime={ this.onSetTime } />
            </Col>
          </Row>
          {/* menu quick booking for mobile */}
          <div 
            className="quickBooking__mobile d-block d-sm-none position-fixed"
            style={ this.state.isToggle === true ? { width: '100%', opacity: '1' } : { width: '0', opacity: '0' } }
          >
            <div className="d-flex text-light border-bottom border-secondary">
              <div className="quickBooking__mobile--icon d-flex justify-content-center align-items-center">
                <FontAwesomeIcon 
                  icon="angle-left"
                  onClick={ this.handleToggle }
                />
              </div>
              <div className="align-self-center border-left border-secondary pl-3">Đặt Vé Nhanh</div>
            </div>
            
            <div className="quickBooking__booth d-flex d-sm-none align-items-center position-relative">
              <Movie movieName={movieName} onReceiveMovie={ this.onSetMovie } />
            </div>
            <div className="quickBooking__booth d-flex d-sm-none align-items-center position-relative">
              <Cinema movie={ this.state.movie } active={ this.state.movieActive } onReceiveCinema={ this.onSetCinema }  />
            </div>
            <div className="quickBooking__booth d-flex d-sm-none align-items-center position-relative">
              <Date cinema={ this.state.cinema } active={ this.state.cinemaActive } onReceiveDate={ this.onSetDate } />
            </div>
            <div className="quickBooking__booth d-flex d-sm-none align-items-center position-relative">
              <Time date={ this.state.date } active={ this.state.dateActive } onReceiveTime={ this.onSetTime } />
            </div>
          </div>
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from './Select.QuickBooking';

class QuickBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      isSticky: true,
      movie: {
        title: 'Tên Phim',
        list: [],
        hasChosen: null, // get data: hasChosen[0].name
        active: true
      },
      cinema: {
        title: 'Tên Rạp',
        list: [],
        hasChosen: null, // get data: hasChosen[0].name
        active: false
      },
      date: {
        title: 'Ngày Chiếu',
        list: [],
        hasChosen: null, // get data: hasChosen[0].date
        active: false
      },
      time: {
        title: 'Xuất Chiếu',
        list: [],
        hasChosen: null, // get data: hasChosen[0].time | hasChosen[0].seat
        active: false
      }
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.onReceiveMovie = this.onReceiveMovie.bind(this);
    this.onReceiveCinema = this.onReceiveCinema.bind(this);
    this.onReceiveDate = this.onReceiveDate.bind(this);
    this.onReceiveTime = this.onReceiveTime.bind(this);
  }

  // listen event scroll
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  // sticky quick booking
  handleScroll() {
    const footer = document.getElementById('footer').scrollHeight;
    const page = document.body.scrollHeight;
    const fixed = page - footer;
    if (window.scrollY + window.innerHeight > fixed) {
      this.setState({
        isSticky: false
      })
    } else {
      this.setState({
        isSticky: true
      })
    }
  }

  // toggle menu mobile
  handleToggle() {
    this.setState({
      isToggle: !this.state.isToggle
    })
  }

  onReceiveMovie(data) {
    const currentMovie = this.props.movies.filter(item => item.name === data);
    const cinema = currentMovie[0].cinema.map(item => item.name);
    this.setState({
      movie: {
        ...this.state.movie,
        hasChosen: currentMovie
      },
      cinema: {
        ...this.state.cinema,
        list: cinema,
        active: true
      },
      date: {
        ...this.state.date,
        active: false
      },
      time: {
        ...this.state.time,
        active: false
      }
    })
  }

  onReceiveCinema(data) {
    const currentCinema = this.state.movie.hasChosen[0].cinema.filter(item => item.name === data);
    const date = currentCinema[0].info.map(item => item.date);
    this.setState({
      cinema: {
        ...this.state.cinema,
        hasChosen: currentCinema
      },
      date: {
        ...this.state.date,
        list: date,
        active: true
      },
      time: {
        ...this.state.time,
        active: false
      }
    })
  }

  onReceiveDate(data) {
    const currentDate = this.state.cinema.hasChosen[0].info.filter(item => item.date === data);
    const time = currentDate[0].times.map(item => item.time);
    this.setState({
      date: {
        ...this.state.date,
        hasChosen: currentDate
      },
      time: {
        ...this.state.time,
        list: time,
        active: true
      }
    })
  }

  onReceiveTime(data) {
    const currentTime = this.state.date.hasChosen[0].times.filter(item => item.time === data);
    this.setState({
      time: {
        ...this.state.time,
        hasChosen: currentTime
      }
    })
    console.log('Do something...');
  }

  render() {
    return (
      <div>
        <section className={"quickBooking" + ( this.state.isSticky ? ' fixed-bottom' : ' position-relative' ) }>
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
                <Select 
                  title={ this.state.movie.title }
                  data={ this.props.movies.map(item => item.name) }
                  active={ this.state.movie.active }
                  onReceive={ this.onReceiveMovie }
                />
              </Col>
              <Col md="2" className="quickBooking__booth d-none d-sm-flex align-items-center position-relative">
                <Select
                  title={ this.state.cinema.title }
                  data={ this.state.cinema.list }
                  active={ this.state.cinema.active }
                  onReceive={ this.onReceiveCinema }
                />
              </Col>
              <Col md="2" className="quickBooking__booth d-none d-sm-flex align-items-center position-relative">
                <Select
                  title={ this.state.date.title }
                  data={ this.state.date.list }
                  active={ this.state.date.active }
                  onReceive={ this.onReceiveDate }
                />
              </Col>
              <Col md="2" className="quickBooking__booth d-none d-sm-flex align-items-center position-relative">
                <Select
                  title={ this.state.time.title }
                  data={ this.state.time.list }
                  active={ this.state.time.active }
                  onReceive={ this.onReceiveTime }
                />
              </Col>
            </Row>
          </Container>    
        </section>
        {/* Menu for mobile: START */}
        <div 
          className="quickBooking__mobile d-block d-sm-none position-fixed"
          style={ this.state.isToggle === true ? { width: '100%' } : { width: '0' } }
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
          
          <div className="quickBooking__booth pt-5 px-3 d-flex d-sm-none align-items-center position-relative">
            <Select 
              title={ this.state.movie.title }
              data={ this.state.movie.list }
              active={ this.state.movie.active }
              onReceive={ this.onReceiveMovie }
            />
          </div>
          <div className="quickBooking__booth pt-5 px-3  d-flex d-sm-none align-items-center position-relative">
            <Select
              title={ this.state.cinema.title }
              data={ this.state.cinema.list }
              active={ this.state.cinema.active }
              onReceive={ this.onReceiveCinema }
            />
          </div>
          <div className="quickBooking__booth pt-5 px-3 d-flex d-sm-none align-items-center position-relative">
            <Select
              title={ this.state.date.title }
              data={ this.state.date.list }
              active={ this.state.date.active }
              onReceive={ this.onReceiveDate }
            />
          </div>
          <div className="quickBooking__booth pt-5 px-3 d-flex d-sm-none align-items-center position-relative">
            <Select
              title={ this.state.time.title }
              data={ this.state.time.list }
              active={ this.state.time.active }
              onReceive={ this.onReceiveTime }
            />
          </div>
        </div>
        {/* Menu for mobile: END */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items
  //------state.[movieAction.js].[movieReducer.js]
});

export default connect(mapStateToProps, null)(QuickBooking);
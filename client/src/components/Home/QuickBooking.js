import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseMovie, chooseCinema, chooseDate, chooseTime, resetBooking } from '../../actions/movieActions';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from './Select.QuickBooking';
import { withRouter } from 'react-router'

class QuickBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.onReceiveMovie = this.onReceiveMovie.bind(this);
    this.onReceiveCinema = this.onReceiveCinema.bind(this);
    this.onReceiveDate = this.onReceiveDate.bind(this);
    this.onReceiveTime = this.onReceiveTime.bind(this);
  }

  // listen event scroll
  componentDidMount() {
    this.props.resetBooking();
    window.addEventListener('scroll', this.handleScroll);
  }

  // sticky quick booking
  handleScroll() {
    const box = document.getElementById('quickBooking');
    const footer = document.getElementById('footer').scrollHeight;
    const page = document.body.scrollHeight;
    const fixed = page - footer;
    if (window.scrollY + window.innerHeight > fixed && box !== null ) {
      box.classList.remove('quickBooking__fixed')
    } else if (box !== null) {
      box.classList.add('quickBooking__fixed')
    }
  }

  // toggle menu mobile
  handleToggle() {
    this.setState({
      isToggle: !this.state.isToggle
    })
  }

  onReceiveMovie(data) {
    this.props.chooseMovie(data);
  }

  onReceiveCinema(data) {
    this.props.chooseCinema(data);
  }

  onReceiveDate(data) {
    this.props.chooseDate(data);
  }

  onReceiveTime(data) {
    this.props.chooseTime(data);
    this.props.history.push(`/movies/${this.props.booking.chooseMovie.slug}/booking`);
  }

  render() {
    const { booking } = this.props;
    return (
      <div>
        <section id="quickBooking" className="quickBooking">
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
                  title={"TÊN PHIM"}
                  name={ booking.chooseMovie ? booking.chooseMovie.name : '' }
                  data={ booking.listMovie }
                  onReceive={ this.onReceiveMovie }
                />
              </Col>
              <Col md="2" className="quickBooking__booth d-none d-sm-flex align-items-center position-relative">
                <Select
                  title={"TÊN RẠP"}
                  name={ booking.chooseCinema ? booking.chooseCinema.name : '' }
                  data={ booking.listCinema }
                  onReceive={ this.onReceiveCinema }
                />
              </Col>
              <Col md="2" className="quickBooking__booth d-none d-sm-flex align-items-center position-relative">
                <Select
                  title={"NGÀY CHIẾU"}
                  name={ booking.chooseDate ? booking.chooseDate.date : '' }
                  data={ booking.listDate }
                  onReceive={ this.onReceiveDate }
                />
              </Col>
              <Col md="2" className="quickBooking__booth d-none d-sm-flex align-items-center position-relative">
                <Select
                  title={"XUẤT CHIẾU"}
                  name={ booking.chooseTime ? booking.chooseTime.time : '' }
                  data={ booking.listTime }
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
              title={"TÊN PHIM"}
              name={ booking.chooseMovie ? booking.chooseMovie.name : '' }
              data={ booking.listMovie }
              onReceive={ this.onReceiveMovie }
            />
          </div>
          <div className="quickBooking__booth pt-5 px-3  d-flex d-sm-none align-items-center position-relative">
            <Select
              title={"TÊN RẠP"}
              name={ booking.chooseCinema ? booking.chooseCinema.name : '' }
              data={ booking.listCinema }
              onReceive={ this.onReceiveCinema }
            />
          </div>
          <div className="quickBooking__booth pt-5 px-3 d-flex d-sm-none align-items-center position-relative">
            <Select
              title={"NGÀY CHIẾU"}
              name={ booking.chooseDate ? booking.chooseDate.date : '' }
              data={ booking.listDate }
              onReceive={ this.onReceiveDate }
            />
          </div>
          <div className="quickBooking__booth pt-5 px-3 d-flex d-sm-none align-items-center position-relative">
            <Select
              title={"XUẤT CHIẾU"}
              name={ booking.chooseTime ? booking.chooseTime.time : '' }
              data={ booking.listTime }
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
  booking: state.movies.booking
});

export default withRouter(connect(mapStateToProps, { chooseMovie, chooseCinema, chooseDate, chooseTime, resetBooking })(QuickBooking));
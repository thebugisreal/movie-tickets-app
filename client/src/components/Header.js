import React, { Component } from 'react';
import { toggleMenu } from '../actions/userActions';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { Row, Col, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from './Search';

const MenuLink = ({ label, to, activeOnlyWhenExact, badge = false }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
      let active = match ? 'active' : '';
      return (
        <span className="mr-2 mr-xl-3">
          <Link to={to} className={`header__item ${active}`}>
            {label} {badge ? <Badge className="position-relative" style={{top: '-5px'}} color="danger">New</Badge> : ''}
          </Link>
        </span>
      )
    }}/>
  )
}

class Header extends Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { logged, user } = this.props;
    return (
    	<header className="header pt-3 pb-1">
        <Row className="d-flex m-0">
          <Col xs="7" sm="6" lg="2" className="pt-lg-1 pb-3 pb-lg-0 d-flex justify-content-lg-end px-lg-0">
            <Link to="/" className="header__logo pr-1 font-weight-bold">
              CGV Cinemas
            </Link>
          </Col>
          <Col sm="12" lg="9" xl="8" className="h-100 order-3 order-lg-2 d-flex flex-column">
            <Search />
            <div className="pb-2 d-none d-md-flex justify-content-between">
              <div>
                <MenuLink label="Phim" to="/movies" />
                <MenuLink label="Tin Mới - Ưu Đãi" to="/news" />
                <MenuLink label="Rạp CGV" to="/cinema" />
                <MenuLink label="Thành Viên" to="/members" />
                <MenuLink badge="true" label="Cultureplex" to="/cultureplex" />
              </div>
              <div>
                <Link to="/" className="header__link ml-2 ml-xl-3">Vkaao</Link>
                <Link to="/" className="header__link ml-2 ml-xl-3">Magazine</Link>
                <Link to="/" className="header__link ml-2 ml-xl-3">Cinemas</Link>
                <Link to="/" className="header__link ml-2 ml-xl-3">Offers</Link>
                <Link to="/" className="header__link ml-2 ml-xl-3">Advertise</Link>
                <Link to="/" className="header__link ml-2 ml-xl-3">Gift Cards</Link>
              </div>
            </div>
          </Col>
          <Col xs="5" sm="6" lg="1" xl="2" className="d-flex text-light pb-3 pb-lg-0 order-2 order-lg-3 justify-content-end justify-content-lg-start pt-xl-1 px-lg-0">
            { logged ? <span style={{color: '#b3b2b2', fontSize: '.8rem'}}>Welcome back, { user.userName }</span> :
            <div className="d-flex">
            <div 
              onClick={ () => this.props.toggleMenu() }
              className="header__btn header__btn--login d-none d-xl-block mr-3"
            >
              Sign In
            </div>
            <FontAwesomeIcon
              onClick={ () => this.props.toggleMenu() }
              className="header__btn header__btn--open" 
              icon="bars" />
            </div> 
            }
          </Col>
        </Row>
      </header>     
    );
  }
}

const mapStateToProps = state => ({
  logged: state.users.logged,
  user: state.users.user
})

export default connect(mapStateToProps, { toggleMenu })(Header);


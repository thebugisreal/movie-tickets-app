import React, { Component } from 'react';
import {
	Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    return (
    	<header className="header">
        <Navbar dark className="header__nav" expand="lg">
          <Container>
            <NavbarBrand className="header__logo font-weight-bold mr-5" href="/">CGV Cinemas</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="d-flex w-100" navbar>
                <NavItem className="mr-3">
                  <NavLink href="#">PHIM</NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink href="#">RẠP CGV</NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink href="#">THÀNH VIÊN</NavLink>
                </NavItem>
                <NavItem className="mr-3">
                  <NavLink href="#">CULTUREPLEX</NavLink>
                </NavItem>
                <NavItem className="ml-lg-auto my-2 my-md-0 d-flex">
                  <NavLink className="header__login mr-3 px-2 border position-relative" href="#">
                  	<FontAwesomeIcon className="mr-2" icon="user" />
                    ĐĂNG NHẬP
                  </NavLink>
                  <NavLink className="ml-4 ml-lg-3" href="#">
                    <FontAwesomeIcon icon="search" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            </Container>
        </Navbar> 
      </header>     
    );
  }
}

export default Header;
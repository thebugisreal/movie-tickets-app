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
        <Navbar className="header__nav" expand="md">
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
                <NavItem className="header__login mr-3 ml-auto border position-relative">
                  <NavLink href="#">
                  	<FontAwesomeIcon className="mr-2" icon="user" />
                    ĐĂNG NHẬP
                  </NavLink>
                </NavItem>
                <NavItem className="ml-3">
                  <NavLink href="#">
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
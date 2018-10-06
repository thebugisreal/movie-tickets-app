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
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="d-flex justify-content-between w-100" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem className="flex-grow-1">
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">
                	<FontAwesomeIcon icon="user" />
                Components
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Container>
      </Navbar>      
    );
  }
}

export default Header;
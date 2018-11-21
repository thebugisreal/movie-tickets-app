import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, TabContent, TabPane, Nav } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

import { toggleNavMenu } from '../../actions/userActions';
import Login from './Login';
import SignUp from './SignUp';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1'
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { navMenu } = this.props;
    return (
      <div>
        <div
          onClick={ () => this.props.toggleNavMenu() }
          className={`${classnames({active: navMenu === true})} customNav__overlay w-100 h-100 position-fixed`}
        >
        </div>
        <div className={`${classnames({active: navMenu === true})} customNav h-100 position-fixed`}>
          <div className="position-relative">
            <FontAwesomeIcon 
              className="position-absolute customNav__back d-none d-md-block"
              icon="times"
              onClick={ () => this.props.toggleNavMenu() }
            />
            <Container>
              <Nav className="pt-3">
                <li className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon 
                    className="text-white mr-3 d-block d-md-none"
                    icon="angle-left"
                    onClick={ () => this.props.toggleNavMenu() }
                  />
                </li>
                <li>
                  <div
                    className={`${classnames({active: this.state.activeTab === '1'})} customNav__link mr-3`}
                    onClick={() => { this.toggle('1'); }}
                  >
                    ĐĂNG NHẬP
                  </div>
                </li>
                <li>
                  <div
                    className={`${classnames({active: this.state.activeTab === '2'})} customNav__link`}
                    onClick={() => { this.toggle('2'); }}
                  >
                    ĐĂNG KÝ
                  </div>
                </li>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Login />
                </TabPane>
                <TabPane tabId="2">
                  <SignUp />
                </TabPane>
              </TabContent>
            </Container>
          </div>
        </div>
      </div>  
    );
  }
}

const mapStateToProps = state => ({
  navMenu: state.users.navMenu
})

export default connect(mapStateToProps, { toggleNavMenu })(Auth);
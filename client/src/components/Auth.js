import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleNavMenu } from '../actions/navAction';
import { Container, Form, Button, FormGroup, Label, Input, TabContent, TabPane, Nav, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
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
                  <Row>
                    <Col sm="12">
                      <Form className="pt-4">
                        <FormGroup>
                          <Label 
                            className="text-light" 
                            for="inputUsername"
                          >
                            Tên Đăng Nhập
                          </Label>
                          <Input name="username" id="inputUsername"/>
                        </FormGroup>
                        <FormGroup>
                          <Label 
                            className="text-light" 
                            for="inputPassword"
                          >
                            Mật Khẩu
                          </Label>
                          <Input type="password" name="password" id="inputPassword"/>
                        </FormGroup>
                        <Button className="w-100 mt-2" color="danger">Đăng Nhập Ngay</Button>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-4 d-flex position-relative justify-content-center align-items-center">
                      <div className="position-absolute customNav__line"></div>
                      <span className="text-light customNav__or">OR</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6" className="pr-2">
                      <Button className="w-100" color="primary">
                        <FontAwesomeIcon className="mr-2" icon={['fab', 'facebook-f']} />
                        Facebook
                      </Button>
                    </Col>
                    <Col xs="6" className="pl-2">
                      <Button className="w-100" color="secondary">
                        <FontAwesomeIcon className="mr-2" icon={['fab', 'github']} />
                        Github
                      </Button>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      content
                    </Col>
                  </Row>
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
  navMenu: state.nav.navMenu
})

export default connect(mapStateToProps, { toggleNavMenu })(Auth);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleNavMenu } from '../actions/navAction';
import { Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';

class Auth extends Component {
  render() {
    const { navMenu } = this.props;
    return (
      <div className={`${classnames({active: navMenu === true})} position_relative`}>
        <div className={`${classnames({active: navMenu === true})} menuMobile position_absolute`}>
          <Container>
            <Form>
              <FormGroup>
                <Label for="inputUsername">Tên Đăng Nhập</Label>
                <Input name="username" id="inputUsername"/>
              </FormGroup>
              <FormGroup>
                <Label for="inputPassword">Mật Khẩu</Label>
                <Input type="password" name="password" id="inputPassword"/>
              </FormGroup>
            </Form>
          </Container>
        </div>
      </div>  
    );
  }
}

const mapStateToProps = state => ({
  navMenu: state.nav.navMenu
})

export default connect(mapStateToProps, { toggleNavMenu })(Auth);
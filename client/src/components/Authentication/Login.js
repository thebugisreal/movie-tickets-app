import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Button, FormGroup, Label, Input } from 'reactstrap';

import { login } from '../../actions/userActions';
import Social from './Social';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      userName: this.state.username,
      password: this.state.password
    }
    this.props.login(JSON.stringify(data))
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col sm="12">
            <Form onSubmit={ this.handleSubmit } className="pt-4">
              <FormGroup>
                <Label 
                  className="text-light" 
                  for="inputUsername"
                >
                  User Name
                </Label>
                <Input 
                  value={ this.state.username } 
                  onChange={ this.handleChange } 
                  name="username" 
                  id="inputUsername"
                />
              </FormGroup>
              <FormGroup>
                <Label 
                  className="text-light" 
                  for="inputPassword"
                >
                  Mật Khẩu
                </Label>
                <Input 
                  value={ this.state.password } 
                  onChange={ this.handleChange } 
                  type="password" 
                  name="password" 
                  id="inputPassword"
                />
              </FormGroup>
              <Button className="w-100 mt-2" color="danger">Đăng Nhập Ngay</Button>
            </Form>
          </Col>
        </Row>
        <Social />
      </Fragment>
    )
  }
}

export default connect(null, { login })(Login);
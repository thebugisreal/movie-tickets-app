import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

import { userLogin } from '../../actions/userActions';

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
    this.props.userLogin(data)
  }

  render() {
    return (
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
    )
  }
}

export default connect(null, { userLogin })(Login);
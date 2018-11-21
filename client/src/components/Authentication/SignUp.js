import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

import { signup } from '../../actions/userActions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
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
      email: this.state.email,
      password: this.state.password
    }
    this.props.signup(JSON.stringify(data))
  }

  render() {
    return (
      <Form onSubmit={ this.handleSubmit } className="pt-4">
        <FormGroup>
          <Label 
            className="text-light" 
            for="txtUsername"
          >
            User Name:
          </Label>
          <Input 
            value={ this.state.username } 
            onChange={ this.handleChange } 
            name="username" 
            id="txtUsername"
          />
        </FormGroup>
        <FormGroup>
          <Label 
            className="text-light" 
            for="txtEmail"
          >
            Email:
          </Label>
          <Input 
            value={ this.state.email } 
            onChange={ this.handleChange }
            type="email"
            name="email" 
            id="txtEmail"
          />
        </FormGroup>
        <FormGroup>
          <Label 
            className="text-light" 
            for="txtPassword"
          >
            Mật Khẩu:
          </Label>
          <Input 
            value={ this.state.password } 
            onChange={ this.handleChange } 
            type="password" 
            name="password" 
            id="txtPassword"
          />
        </FormGroup>
        <Button className="w-100 mt-2" color="danger">Đăng Ký</Button>
      </Form>
    )
  }
}

export default connect(null, { signup })(SignUp);
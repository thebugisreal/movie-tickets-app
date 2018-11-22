import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Button, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import classnames from 'classnames';
import ReactLoading from 'react-loading';

import { signup, loading, reset } from '../../actions/userActions';
import Social from './Social';

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
    this.handleReset = this.handleReset.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.registered === true ) {
      this.handleReset();
    }
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
    this.props.loading();
    this.props.reset();
    const data = {
      userName: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    this.props.signup(JSON.stringify(data))
  }

  handleReset() {
    this.setState({
      username: '',
      email: '',
      password: ''
    });
  }

  render() {
    const { signUpErrors, registered, isShowLoading } = this.props;
    return (
      <Fragment>
        <Row>
          <Col sm="12">
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
                  className={`${classnames({'is-invalid': signUpErrors.userName !== null})}`}
                  required
                />
                <FormFeedback>{ signUpErrors.userName }</FormFeedback>
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
                  className={`${classnames({'is-invalid': signUpErrors.email !== null})}`}
                  required
                />
                <FormFeedback>{ signUpErrors.email }</FormFeedback>
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
                  required
                />
              </FormGroup>
              <Button className="w-100 mt-2" color="danger">
                 { isShowLoading && <ReactLoading className="d-inline-block mr-2" type={'spin'} color={'#fff'} height={'20px'} width={'20px'} /> }
                 <span>Đăng Ký</span>
              </Button>
              { registered && <div className="text-light mt-3">Đăng ký tài khoản thành công.</div> }
            </Form>
          </Col>
        </Row>
        <Social />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isShowLoading: state.users.isShowLoading,
  signUpErrors: state.users.signUpErrors,
  registered: state.users.registered
})

export default connect(mapStateToProps, { signup, loading, reset })(SignUp);
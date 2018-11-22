import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Form, Button, FormGroup, Label, Input, FormFeedback,  } from 'reactstrap';
import ReactLoading from 'react-loading';
import classnames from 'classnames';

import { login, loading, reset } from '../../actions/userActions';
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
    this.props.loading();
    this.props.reset();
    const data = {
      userName: this.state.username,
      password: this.state.password
    }
    this.props.login(JSON.stringify(data))
  }

  render() {
    const { loginErrors, isShowLoading } = this.props;
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
                  className={`${classnames({'is-invalid': loginErrors.userName !== null})}`}
                  required
                />
                <FormFeedback>{ loginErrors.userName }</FormFeedback>
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
                  className={`${classnames({'is-invalid': loginErrors.password !== null})}`}
                  required
                />
                <FormFeedback>{ loginErrors.password }</FormFeedback>
              </FormGroup>
              <Button className="w-100 mt-2" color="danger">
                { isShowLoading && <ReactLoading className="d-inline-block mr-2" type={'spin'} color={'#fff'} height={'20px'} width={'20px'} /> }
                 <span>Đăng Nhập Ngay</span>
              </Button>
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
  loginErrors: state.users.loginErrors
})

export default connect(mapStateToProps, { login, loading, reset })(Login);
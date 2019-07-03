import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSumbit = e => {
    let { username, password } = this.state;

    // let userInfo = {};
    if (username !== "" || password !== "") {
      let userInfo = {
        username,
        password
      };

      this.props.onUserSubmit(userInfo);
    } else {
      console.log("empty fields");
    }

    e.preventDefault();
  };

  render() {
    let { username, password } = this.state;
    return (
      <>
        <h1 style={{ paddingBottom: 30 }}>Login</h1>
        <Form data-test="login-form">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              onChange={this.handleChange}
              name="username"
              value={username}
              type="text"
              placeholder="Enter username"
              data-test="input"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
              data-test="input"
            />
          </Form.Group>
          <Button
            variant="outline-primary"
            type="submit"
            onClick={this.handleSumbit}
            data-test="button"
          >
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

Login.propTypes = {
  onUserSubmit: PropTypes.func
};

export default Login;

import React, { Component } from "react";
import APIURL from "../helpers/environment";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormFeedback
} from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      modal: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    fetch(`${APIURL}/user/signup`, {
      method: "POST", //2
      body: JSON.stringify({ user: this.state }), //added signupinfo here
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(data => {
        this.props.setToken(data.sessionToken);
      });
    event.preventDefault();
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div>
        <Button className="btn-lg mt-4 mr-5" onClick={this.toggle}>
          Sign Up
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader
            style={{ backgroundColor: "#C63456", color: "white" }}
            toggle={this.toggle}
          >
            Sign Up
          </ModalHeader>
          <ModalBody style={{ backgroundColor: "#286b88", color: "white" }}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="firstname">First Name</Label>
                <Input
                  valid
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="enter firstname"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastname">Last Name</Label>
                <Input
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="enter lastname"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="enter email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="enter username"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="su_password"
                  type="password"
                  minLength="8"
                  required
                  name="password"
                  placeholder="enter password"
                  onChange={this.handleChange}
                />
                {this.state.password.length > 7 ? (
                  <p style={{ color: "#42f468" }}>
                    Success! Password meets standards!
                  </p>
                ) : (
                  <p style={{ color: "red" }}>
                    Passwords must be at least 8 characters in length
                  </p>
                )}
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Signup;

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import APIURL from "../helpers/environment";

class NoteCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      category: "",
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(`${APIURL}/note/create`, {
      method: "POST",
      body: JSON.stringify({ note: this.state }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
      })
    })
      .then(res => res.json())
      .then(logData => {
        this.props.updateNotesArray();
        this.setState({
          title: "",
          content: "",
          category: "",
          modal: false
        });
      });
  };

  render() {
    return (
      <div>
        <FontAwesomeIcon
          style={{ fontSize: "2em", marginTop: "15px", color: "green" }}
          onClick={this.toggle}
          icon="plus"
        />
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader
            style={{ backgroundColor: "#C63456", color: "white" }}
            toggle={this.toggle}
          >
            Create New Note
          </ModalHeader>
          <ModalBody style={{ backgroundColor: "#286b88", color: "white" }}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="enter title"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="content">Content</Label>
                <Input
                  id="content"
                  type="text"
                  name="content"
                  placeholder="enter content"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  id="category"
                  type="text"
                  name="category"
                  placeholder="enter category"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default NoteCreate;

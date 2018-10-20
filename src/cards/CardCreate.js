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

class CardCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
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
    fetch(`${APIURL}/card/create`, {
      method: "POST",
      body: JSON.stringify({ card: this.state }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
      })
    })
      .then(res => res.json())
      .then(logData => {
        this.props.updateCardsArray();
        this.setState({
          question: "",
          answer: "",
          category: "",
          modal: false
        });
      });
  };

  render() {
    return (
      <div>
        <FontAwesomeIcon
          style={{ fontSize: "2em", color: "green" }}
          onClick={this.toggle}
          icon="plus"
        />
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader
            style={{ backgroundColor: "#C63456", color: "white" }}
            toggle={this.toggle}
          >
            Create New FlashCard
          </ModalHeader>
          <ModalBody style={{ backgroundColor: "#286b88", color: "white" }}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="question">Question</Label>
                <Input
                  id="question"
                  type="text"
                  name="question"
                  placeholder="enter question"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="answer">Answer</Label>
                <Input
                  id="answer"
                  type="text"
                  name="answer"
                  placeholder="enter answer"
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
              <Button color="success" type="submit">
                Create!
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CardCreate;

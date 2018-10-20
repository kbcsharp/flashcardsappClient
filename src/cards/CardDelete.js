import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import APIURL from "../helpers/environment";

class CardDelete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      question: "",
      answer: "",
      category: "",
      modal: false,
      cardNumber: ""
    };
  }

  cardDelete = (event, card) => {
    fetch(`${APIURL}/card/${card.id}/delete`, {
      method: "DELETE",
      body: JSON.stringify({ card: card }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
      })
    })
      .then(res => {
        this.props.prevCard();
      })
      // .then(res => {
      //   this.props.updateCardsArray();
      // })
      .then(res => {
        this.props.updateCards();
      })
      .then(res => {
        this.props.getCurrentCard();
      })
      .then(res => {
        this.props.updateCardTotal();
      })
      .then(res => {
        this.setState({
          id: this.props.cardnow.id,
          question: this.props.cardnow.question,
          answer: this.props.cardnow.answer,
          category: this.props.cardnow.category,
          modal: false
        });
      });
  };
  //   }).then(res => {
  //     this.props.updateCardsArray()
  //     this.props.getCurrentCard()
  //     this.setState({
  //       id: this.props.cardnow.id,
  //       question: this.props.cardnow.question,
  //       answer: this.props.cardnow.answer,
  //       category: this.props.cardnow.category,
  //       modal: false
  //     });
  //   });
  // };

  toggle = () => {
    this.setState({
      id: this.props.cardnow.id,
      question: this.props.cardnow.question,
      answer: this.props.cardnow.answer,
      category: this.props.cardnow.category,
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
    this.cardDelete(event, this.state);
  };

  render() {
    return (
      <div>
        <FontAwesomeIcon
          style={{ color: "red", fontSize: "2em" }}
          onClick={this.toggle}
          icon="times"
        />
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader style={{ backgroundColor: "#C63456", color: "white" }}>
            Delete Flashcard
          </ModalHeader>
          <ModalBody style={{ backgroundColor: "#286b88", color: "white" }}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="question">Question</Label>
                <Input
                  id="question"
                  type="text"
                  name="question"
                  value={this.state.question}
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
                  value={this.state.answer}
                  onChange={this.handleChange}
                  placeholder="enter answer"
                />
              </FormGroup>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  id="category"
                  type="text"
                  name="category"
                  value={this.state.category}
                  placeholder="enter category"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button type="submit"> Submit </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CardDelete;

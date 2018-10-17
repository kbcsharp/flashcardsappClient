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

class NoteDelete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      content: "",
      category: "",
      modal: false
    };
  }

  noteDelete = (event, note) => {
    fetch(`${APIURL}/note/${note.id}/delete`, {
      method: "DELETE",
      body: JSON.stringify({ note: note }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
      })
    }).then(res => {
      this.props.updateNotesArray();
      this.setState({
        id: "",
        title: "",
        content: "",
        category: "",
        modal: false
      });
      this.props.reset();
    });
  };

  toggle = () => {
    this.setState({
      id: this.props.notenow.id,
      title: this.props.notenow.title,
      content: this.props.notenow.content,
      category: this.props.notenow.category,
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
    this.noteDelete(event, this.state);
  };

  render() {
    return (
      <div>
        <Button className="btn-sm mt-3 ml-3" onClick={this.toggle}>
          <FontAwesomeIcon icon="times" />
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader style={{ backgroundColor: "#C63456", color: "white" }}>
            Delete Note
          </ModalHeader>
          <ModalBody style={{ backgroundColor: "#286b88", color: "white" }}>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  value={this.state.title}
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
                  value={this.state.content}
                  onChange={this.handleChange}
                  placeholder="enter content"
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

export default NoteDelete;

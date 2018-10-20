import React, { Component } from "react";
import { Button } from "reactstrap";
import { Spring } from "react-spring";
import paper from "../paper.svg";
import NoteCreate from "../notes/NoteCreate";
import NoteEdit from "../notes/NoteEdit";
import NoteDelete from "../notes/NoteDelete";
import APIURL from "../helpers/environment";

class NoteLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      currentNote: {},
      category: "",
      content: ""
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    fetch(`${APIURL}/note/getall`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
      })
    })
      .then(res => res.json())
      .then(logData => {
        return this.setState({
          notes: logData
        });
      });
  };

  getCurrentNote = cat => {
    const result = this.state.notes.filter(note => note.category === cat);
    this.setState({
      currentNote: result[0]
    });
  };

  updateCurrentNote = note => {
    this.setState({ currentNote: note });
  };

  resetCurrentNote = () => {
    this.setState({ currentNote: {}, category: "" });
  };

  handleSubmit = event => {
    event.preventDefault();
    let cat = event.target.value;
    this.setState({ category: cat });
    this.getCurrentNote(cat);
  };

  render() {
    return (
      <div style={{ width: "765px" }}>
        <h3 style={{ textAlign: "center", color: "white" }}>
          Choose a Note Category
        </h3>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1000 }}
        >
          {props => (
            <div style={props}>
              {this.state.notes.map((note, id) => {
                return (
                  <Button
                    key={note.id}
                    name={note.category}
                    value={note.category}
                    className="mr-2 mb-2"
                    onClick={this.handleSubmit}
                  >
                    {note.category}
                  </Button>
                );
              })}
            </div>
          )}
        </Spring>
        <Spring
          from={{ transform: `translate3d(500px,0,0)`, opacity: 0 }}
          to={{ transform: `translate3d(0px,0,0)`, opacity: 1 }}
          config={{ delay: 600 }}
        >
          {props => (
            <div style={props}>
              <div
                style={{
                  borderRadiusTopRight: "10%",
                  boxShadow: "-15px 15px 15px rgba(39, 70, 89, 0.9)",
                  backgroundImage: `url(${paper})`,
                  width: "765px",
                  height: "990px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start"
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <NoteCreate
                    token={this.props.token}
                    updateNotesArray={this.fetchNotes}
                  />

                  <NoteEdit
                    token={this.props.token}
                    updateNotesArray={this.fetchNotes}
                    notenow={this.state.currentNote}
                    getNote={this.getCurrentNote}
                    updateCurrentNote={this.updateCurrentNote}
                  />

                  <NoteDelete
                    token={this.props.token}
                    updateNotesArray={this.fetchNotes}
                    notenow={this.state.currentNote}
                    getNote={this.getCurrentNote}
                    updateCurrentNote={this.updateCurrentNote}
                    reset={this.resetCurrentNote}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "40px"
                  }}
                >
                  <h3 style={{ textAlign: "center" }}>{this.state.category}</h3>
                  <p
                    style={{
                      paddingLeft: "110px",
                      textAlign: "left",
                      lineHeight: "3",
                      width: "700px"
                    }}
                  >
                    {this.state.currentNote.content}
                  </p>
                </div>
              </div>
            </div>
            // </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default NoteLayout;

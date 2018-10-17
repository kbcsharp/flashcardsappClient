import React, { Component } from "react";
import NoteLayout from "./NoteLayout";

class NotesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div
          style={{
            width: "765px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <NoteLayout token={this.props.token} />
        </div>
      </div>
    );
  }
}

export default NotesIndex;

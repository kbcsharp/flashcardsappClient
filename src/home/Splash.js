import React, { Component } from "react";
import CardsIndex from "../cards/CardsIndex";
import NotesIndex from "../notes/NotesIndex";
import DeckCardsLayout from "../decks/DeckCardsLayout";

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#286b88",
          height: "100%",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flexstart"
          }}
        >
          <DeckCardsLayout token={this.props.sessionToken} />
          <CardsIndex token={this.props.sessionToken} />
        </div>
        <NotesIndex token={this.props.sessionToken} />
      </div>
    );
  }
}

export default Splash;

// const Splash = props => {
//   return (
//     <div
//       style={{
//         backgroundColor: "#286b88",
//         height: "100%",
//         display: "flex",
//         justifyContent: "space-around"
//       }}
//     >
//       <CardsIndex token={props.sessionToken} />
//       <NotesIndex token={props.sessionToken} />
//     </div>
//   );
// };

// export default Splash;

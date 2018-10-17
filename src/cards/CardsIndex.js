import React, { Component } from "react";
import CardCreate from "./CardCreate";
import { Button } from "reactstrap";
import CardLayout from "../cards/CardLayout";

class CardsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div
          style={{
            height: "65%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <CardLayout token={this.props.token} />
        </div>
      </div>
    );
  }
}

export default CardsIndex;

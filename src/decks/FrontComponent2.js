import React from "react";
import indexcard from "../indexcard.jpeg";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FrontComponent2 = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: `url(${indexcard})`,
        width: "500px",
        height: "300px",
        listStyleType: "none",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "500px",
          display: "flex"
        }}
      >
        {props.number} of {props.total}
      </div>

      <div>
        <h4 style={{ margin: "-80px" }}>{props.category}</h4>
      </div>
      <div style={{ width: "400px" }}>{props.question}</div>
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center"
        }}
      >
        {props.number > 1 ? (
          <Button onClick={props.prevCard}>
            <FontAwesomeIcon icon="angle-left" />
          </Button>
        ) : (
          <div />
        )}

        <FontAwesomeIcon
          style={{ fontSize: "2em" }}
          onClick={props.handleClick}
          icon="share"
        />
        {props.number < props.total ? (
          <FontAwesomeIcon
            style={{ fontSize: "2em" }}
            onClick={props.nextCard}
            icon="angle-right"
          />
        ) : (
          <div />
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default FrontComponent2;

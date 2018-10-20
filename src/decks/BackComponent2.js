import React from "react";
import indexcard from "../indexcard.jpeg";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackComponent2 = props => {
  return (
    <div
      style={{
        boxShadow: "15px 15px 15px rgba(39, 70, 89, 0.9)",
        display: "flex",
        backgroundImage: `url(${indexcard})`,
        width: "500px",
        height: "300px",
        listStyleType: "none"
      }}
    >
      <div style={{ alignSelf: "flexstart" }}>
        {props.number} of {props.total}
      </div>
      <div
        style={{
          height: "300px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "space-between",
          paddingTop: "70px"
        }}
      >
        <div>{props.answer}</div>
        <div style={{ textAlign: "center" }}>
          <FontAwesomeIcon
            style={{ fontSize: "2em" }}
            onClick={props.handleClick}
            icon="reply"
          />
        </div>
      </div>
    </div>
  );
};

export default BackComponent2;

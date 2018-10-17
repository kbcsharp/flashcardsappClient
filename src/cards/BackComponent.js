import React from "react";
import indexcard from "../indexcard.jpeg";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackComponent = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(${indexcard})`,
        width: "500px",
        height: "300px",
        listStyleType: "none"
      }}
    >
      <div
        style={{
          width: "500px",
          textAlign: "left"
        }}
      >
        {props.number} of {props.total}
      </div>
      <div
        style={{
          height: "300px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "70px"
        }}
      >
        <div>{props.answer}</div>
        <div style={{ textAlign: "center" }}>
          <Button
            style={{ width: "30px" }}
            className="btn-sm"
            onClick={props.handleClick}
          >
            <FontAwesomeIcon icon="reply" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BackComponent;

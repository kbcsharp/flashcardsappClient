import React from "react";
import indexcard from "../indexcard.jpeg";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FrontComponent2 = props => {
  return (
    <div
      style={{
        boxShadow: "15px 15px 15px rgba(39, 70, 89, 0.9)",
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
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div>
          {props.number} of {props.total}
        </div>
        <div>
          <h4>{props.category}</h4>
        </div>
      </div>

      <div
        style={{
          height: "300px",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "65px"
        }}
      >
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
            <FontAwesomeIcon
              style={{ fontSize: "2em" }}
              onClick={props.prevCard}
              icon="angle-left"
            />
          ) : (
            <div style={{ width: "17px" }} />
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
            <div style={{ width: "16px" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FrontComponent2;

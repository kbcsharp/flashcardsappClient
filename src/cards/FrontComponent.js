import React from "react";
import indexcard from "../indexcard.jpeg";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardCreate from "./CardCreate";
import CardEdit from "./CardEdit";
import CardDelete from "./CardDelete";

const FrontComponent = props => {
  return (
    <div
      style={{
        textAlign: "center",
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
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        {props.number} of {props.total}
        <CardCreate
          token={props.token}
          updateCardsArray={props.updateCardsArray}
        />
        {props.number >= 1 ? (
          <CardEdit
            token={props.token}
            cardnow={props.cardnow}
            updateCardsArray={props.updateCardsArray}
            getCurrentCard={props.getCurrentCard}
          />
        ) : (
          <div />
        )}
        <CardDelete
          token={props.token}
          cardnow={props.cardnow}
          updateCardsArray={props.updateCardsArray}
          getCurrentCard={props.getCurrentCard}
        />
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
          paddingTop: "50px"
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
            <Button onClick={props.prevCard}>
              <FontAwesomeIcon icon="angle-left" />
            </Button>
          ) : (
            <div />
          )}
          <Button
            style={{ width: "30px" }}
            className="btn-sm"
            onClick={props.handleClick}
          >
            <FontAwesomeIcon icon="share" />
          </Button>
          {props.number < props.total ? (
            <Button onClick={props.nextCard}>
              <FontAwesomeIcon icon="angle-right" />
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default FrontComponent;

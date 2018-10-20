import React from "react";
import indexcard from "../indexcard.jpeg";
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
          prevCard={props.prevCard}
          updateCards={props.updateCards}
          updateCardTotal={props.updateCardTotal}
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
              icon="angle-right"
              onClick={props.nextCard}
            />
          ) : (
            <div style={{ width: "16px" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FrontComponent;

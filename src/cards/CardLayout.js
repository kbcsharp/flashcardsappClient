import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import CardCreate from "./CardCreate";
// import CardEdit from "./CardEdit";
// import CardDelete from "./CardDelete";
// import Card from "./Card";
import Card2 from "./Card2";
import { Button } from "reactstrap";
import APIURL from "../helpers/environment";

class CardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      cardNumber: 1,
      index: 0,
      cardTotal: "",
      currentCard: {}
    };
  }

  componentDidMount() {
    this.fetchCards();
  }

  fetchCards = () => {
    fetch(`${APIURL}card/getall`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
      })
    })
      .then(res => res.json())
      .then(logData => {
        return this.setState({
          cards: logData,
          cardTotal: logData.length,
          currentCard: logData[0]
        });
      });
  };

  getCurrentCard = () => {
    let currentCardHolder = this.state.cards[this.state.index];
    console.log(currentCardHolder);
    this.setState({
      currentCard: currentCardHolder
    });
  };

  // getCardTotal = () => {
  //   //not working
  //   let array = this.state.cards;
  //   let total = array.length;
  //   this.setState({
  //     cardTotal: total
  //   });
  // };

  nextCard = () => {
    let cardsHolder = this.state.cards;
    let cardNumberHolder = this.state.cardNumber;
    let indexHolder = this.state.index;
    indexHolder++;
    let currentCardHolder = cardsHolder[indexHolder];
    if (cardNumberHolder !== cardsHolder.length) {
      cardNumberHolder++;
      this.setState({
        cardNumber: cardNumberHolder,
        cardTotal: cardsHolder.length,
        index: indexHolder,
        currentCard: currentCardHolder
      });
    }
  };

  prevCard = () => {
    let cardsHolder = this.state.cards;
    let cardNumberHolder = this.state.cardNumber;
    let indexHolder = this.state.index;
    indexHolder--;
    if (cardNumberHolder > 1) {
      cardNumberHolder--;

      let currentCardHolder = cardsHolder[indexHolder];
      this.setState({
        cardNumber: cardNumberHolder,
        cardTotal: cardsHolder.length,
        index: indexHolder,
        currentCard: currentCardHolder
      });
    } else {
    }
  };

  render() {
    return (
      <div style={{ width: "500px" }}>
        <div>
          {this.state.cardTotal >= 1 ? (
            <Card2
              token={this.props.token}
              question={this.state.currentCard.question}
              answer={this.state.currentCard.answer}
              number={this.state.cardNumber}
              total={this.state.cardTotal}
              cardnow={this.state.currentCard}
              updateCardsArray={this.fetchCards}
              getCurrentCard={this.getCurrentCard}
              prevCard={this.prevCard}
              nextCard={this.nextCard}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default CardLayout;

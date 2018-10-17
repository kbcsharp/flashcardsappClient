import React, { Component } from "react";
import { Form, FormGroup, Button, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import deck from "../deck.jpeg";
import DeckCard from "./DeckCard";

class DeckCardsLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      categories: [],
      deck: [],
      cardNumber: 1,
      index: 0,
      currentCard: {},
      category: ""
    };
  }

  componentDidMount() {
    this.fetchCardsAll();
  }

  fetchCardsAll = () => {
    fetch("http://localhost:3001/card/getall", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token
      })
    })
      .then(res => res.json())
      .then(logData => {
        return this.setState({
          cards: logData
        });
      });
  };

  removeDuplicateCategories = categories => {
    let uniqueCategories = categories.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });
    this.setState({ categories: uniqueCategories });
  };

  getCategories = () => {
    this.fetchCardsAll();
    let allCards = this.state.cards;
    console.log(allCards);
    let categories = [];
    allCards.filter(card => {
      categories.push(card.category);
    });
    this.removeDuplicateCategories(categories);
  };

  showDeck = event => {
    event.preventDefault();
    this.setState({ index: 0, cardNumber: 1 });
    let cat = event.target.value;
    let newArray = [];
    this.state.cards.filter(card => {
      if (card.category === cat) {
        newArray.push(card);
      }
    });
    this.setState({ deck: newArray, category: newArray[0].category });
    this.getCurrentCard();
  };

  getCurrentCard = () => {
    let currentCardHolder = this.state.deck[this.state.index];
    console.log(currentCardHolder);
    this.setState({
      currentCard: currentCardHolder,
      cardTotal: this.state.deck.length
    });
  };

  nextCard = () => {
    let cardsHolder = this.state.deck;
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
    let cardsHolder = this.state.deck;
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
      <div style={{ textAlign: "center" }}>
        <Button onClick={this.getCategories}>Display/Update Decks</Button>
        <div>
          <Form onSubmit={this.showDeck}>
            <FormGroup style={{ display: "flex", justifyContent: "center" }}>
              {this.state.categories.map((category, index) => (
                <Input
                  className="ml-1"
                  type="image"
                  src={deck}
                  alt="photo of index card deck"
                  style={{
                    color: "black",
                    // background: `url(${deck})`,
                    width: "80px",
                    height: "60px"
                  }}
                  // className="ml-2"
                  key={index}
                  name={category}
                  value={category}
                  onClick={this.showDeck}
                />
              ))}
            </FormGroup>
          </Form>
          <div>
            {this.state.cardTotal >= 1 ? (
              <DeckCard
                token={this.props.token}
                question={this.state.currentCard.question}
                answer={this.state.currentCard.answer}
                number={this.state.cardNumber}
                total={this.state.cardTotal}
                cardnow={this.state.currentCard}
                prevCard={this.prevCard}
                nextCard={this.nextCard}
                category={this.state.category}
              />
            ) : (
              <span />
            )}
          </div>
        </div>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "300px"
          }}
        > */}
        {/* {this.state.cardNumber > 1 ? (
            <Button onClick={this.prevCard}>
              <FontAwesomeIcon icon="angle-left" />
            </Button>
          ) : (
            <div />
          )} */}
        {/* {this.state.cardNumber < this.state.cardTotal ? (
            <Button onClick={this.nextCard}>
              <FontAwesomeIcon icon="angle-right" />
            </Button>
          ) : (
            <div />
          )} */}
        {/* </div> */}
      </div>
    );
  }
}
export default DeckCardsLayout;

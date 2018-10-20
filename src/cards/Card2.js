import React, { Component } from "react";
import indexcard from "../indexcard.jpeg";
import { Button } from "reactstrap";
import { Spring } from "react-spring";
import ReactCardFlip from "react-card-flip";
import FrontComponent from "../cards/FrontComponent";
import BackComponent from "../cards/BackComponent";

class Card2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
  }

  handleClick = e => {
    e.preventDefault();
    let toggle = this.state.isFlipped;
    this.setState({ isFlipped: !toggle });
  };

  render() {
    return (
      <React.Fragment>
        <Spring
          from={{ transform: `translate3d(0,500px,0)`, opacity: 0 }}
          to={{ transform: `translate3d(0,0px,0)`, opacity: 1 }}
          config={{ delay: 600 }}
        >
          {props => (
            <div style={props}>
              <div>
                <ReactCardFlip
                  flipSpeedBackToFront={2}
                  flipSpeedFrontToBack={2}
                  isFlipped={this.state.isFlipped}
                >
                  <FrontComponent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "spacebetween",
                      backgroundImage: `url(${indexcard})`,
                      width: "500px",
                      height: "300px",
                      listStyleType: "none"
                    }}
                    token={this.props.token}
                    question={this.props.question}
                    answer={this.props.answer}
                    number={this.props.number}
                    total={this.props.total}
                    cardnow={this.props.cardnow}
                    handleClick={this.handleClick}
                    updateCardsArray={this.props.updateCardsArray}
                    getCurrentCard={this.props.getCurrentCard}
                    prevCard={this.props.prevCard}
                    nextCard={this.props.nextCard}
                    updateCards={this.props.updateCards}
                    updateCardTotal={this.props.updateCardTotal}
                    key="front"
                  >
                    {/* <Button className="btn-sm mt-5" onClick={this.handleClick}>
                Click to flip
              </Button> */}
                  </FrontComponent>

                  <BackComponent
                    token={this.props.token}
                    question={this.propsquestion}
                    answer={this.props.answer}
                    number={this.props.number}
                    total={this.props.total}
                    cardnow={this.props.cardnow}
                    handleClick={this.handleClick}
                    key="back"
                  />
                </ReactCardFlip>
              </div>
            </div>
          )}
        </Spring>
      </React.Fragment>
    );
  }
}

export default Card2;

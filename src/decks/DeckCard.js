import React, { Component } from "react";
import indexcard from "../indexcard.jpeg";
import { Button } from "reactstrap";
import { Spring } from "react-spring";
import ReactCardFlip from "react-card-flip";
import FrontComponent2 from "../decks/FrontComponent2";
import BackComponent2 from "../decks/BackComponent2";

class Card2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
  }

  handleCllick = e => {
    e.preventDefault();
    let toggle = this.state.isFlipped;
    this.setState({ isFlipped: !toggle });
  };

  render() {
    return (
      <div style={{ height: "300px", marginBottom: "30px" }}>
        <Spring
          from={{ transform: `translate3d(0,0,500px)`, opacity: 0 }}
          to={{ transform: `translate3d(0,0,0px)`, opacity: 1 }}
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
                  <FrontComponent2
                    style={{
                      display: "flex",
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
                    handleClick={this.handleCllick}
                    prevCard={this.props.prevCard}
                    nextCard={this.props.nextCard}
                    category={this.props.category}
                    key="front"
                  >
                    {/* <Button className="btn-sm mt-5" onClick={this.handleClick}>
                Click to flip
              </Button> */}
                  </FrontComponent2>

                  <BackComponent2
                    token={this.props.token}
                    question={this.propsquestion}
                    answer={this.props.answer}
                    number={this.props.number}
                    total={this.props.total}
                    cardnow={this.props.cardnow}
                    handleClick={this.handleCllick}
                    category={this.props.category}
                    key="back"
                  />
                </ReactCardFlip>
              </div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default Card2;

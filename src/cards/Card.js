// import React, { Component } from "react";
// import indexcard from "../indexcard.jpeg";
// import { Button } from "reactstrap";

// class Card extends Component {
//   constructor() {
//     super();
//     this.state = {
//       showAnswer: false
//     };
//   }

//   toggle = () => {
//     let showBack = this.state.showAnswer;
//     this.setState({
//       showAnswer: !showBack
//     });
//   };

//   display = () => {
//     if (this.state.showAnswer === false) {
//       return (
//         <div>
//           this.props.question
//           <p>Show Answer</p>
//         </div>
//       );
//     } else {
//       return this.props.answer;
//     }
//   };

//   render() {
//     return (
//       <div
//         style={{
//           display: "flex",
//           backgroundImage: `url(${indexcard})`,
//           width: "500px",
//           height: "300px",
//           listStyleType: "none"
//         }}
//       >
//         <div style={{ alignSelf: "flexstart" }}>
//           {this.props.number} of {this.props.total}
//         </div>
//         <div
//           style={{
//             height: "300px",
//             width: "400px",
//             display: "flex",
//             flexDirection: "column",
//             textAlign: "center",
//             justifyContent: "space-between",
//             paddingTop: "70px"
//           }}
//         >
//           {!this.state.showAnswer ? (
//             <div>{this.props.question}</div>
//           ) : (
//             <div>{this.props.answer}</div>
//           )}
//           <Button
//             style={{ alignSelf: "center", width: "30%", height: "35px" }}
//             className="btn-sm"
//             onClick={this.toggle}
//           >
//             {!this.state.showAnswer ? <p>Show Answer</p> : <p>Show Question</p>}
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Card;

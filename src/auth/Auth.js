import React from "react";
import { Jumbotron } from "reactstrap";
import { Spring } from "react-spring";
import Signup from "./Signup";
import Login from "./Login";
import "./auth.css";
import logonotez from "../logonotez.png";

const Auth = ({ setToken }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Jumbotron style={{ backgroundColor: "#286b88" }}>
        <div style={{ textAlign: "center" }}>
          <Spring
            from={{ transform: `translate3d(-500px,0,0)`, opacity: 0 }}
            to={{ transform: `translate3d(0px,0,0)`, opacity: 1 }}
          >
            {props => (
              <div style={props}>
                <img
                  style={{ width: "372", height: "160px" }}
                  src={logonotez}
                  alt="logo"
                />
              </div>
            )}
          </Spring>
          <p>The app for all of your flashcards and study notes!</p>
          <hr />
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 900, tension: 280, friction: 120 }}
          >
            {props => (
              <div style={props} className="auth-buttons">
                <Signup setToken={setToken} />
                <Login setToken={setToken} />
              </div>
            )}
          </Spring>
        </div>
      </Jumbotron>
    </div>
  );
};
export default Auth;

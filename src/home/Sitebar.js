import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import logonotez from "../logonotez.png";

class SiteBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Navbar
        light
        expand="md"
        style={{ backgroundColor: "#C63456", color: "white" }}
      >
        <NavbarBrand style={{ color: "white" }} href="/">
          <img src={logonotez} alt="logo" />
        </NavbarBrand>
        {!this.props.name ? (
          <span />
        ) : (
          <span>
            <p>`Welcome, {this.props.name}`</p>
          </span>
        )}
        <NavbarToggler className="navbar-dark" onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" style={{ float: "right" }} navbar>
            <NavItem>
              <Button onClick={() => this.props.clickLogout()}>Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default SiteBar;

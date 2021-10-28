import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main.js";
import Footer from "./Footer.js";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // render an individual beast in a Modal
      show: false,
      animal: "",
    };
  }

  showModal = (val) => {
    // set modal to show to true
    this.setState({ show: true });
    this.setState({ animal: val });
  };

  hideModal = () => {
    // set modal to show false
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Header />
        <Main data={data} showModal={this.showModal} />
        <Footer />
        <SelectedBeast
          data={data}
          animal={this.state.animal}
          show={this.state.show}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}

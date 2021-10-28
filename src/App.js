import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main.js";
import Footer from "./Footer.js";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast.js";
import HornedForm from "./HornedForm.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      featuredAnimal: {},
      showBeasts: data,
    };
  }

  showModal = (val) => {
    // set modal to show to true
    this.setState({ show: true });
    this.setState({ featuredAnimal: val });
  };

  closeModal = () => {
    // set modal to show false
    this.setState({ show: false });
  };

  filterBeasts = (selection) => {
    let hornCount = selection;
    let updatedHornArray;
    // show beasts with one horn
    if (hornCount === "one") {
      updatedHornArray = data.filter((animal) => animal.horns === 1);
      this.setState({ showBeasts: updatedHornArray });
    } else if (hornCount === "two") {
      updatedHornArray = data.filter((animal) => animal.horns === 2);
      this.setState({ showBeasts: updatedHornArray });
    } else if (hornCount === "three") {
      updatedHornArray = data.filter((animal) => animal.horns >= 3);
      this.setState({ showBeasts: updatedHornArray });
    } else {
      this.setState({ showBeasts: data });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <HornedForm filterBeasts={this.filterBeasts} />
        <Main data={this.state.showBeasts} showModal={this.showModal} />
        <Footer />
        <SelectedBeast
          animal={this.state.featuredAnimal}
          show={this.state.show}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

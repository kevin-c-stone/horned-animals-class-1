import { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import Row from "react-bootstrap/Row";

class Main extends Component {
  // function
  showModal = (val) => {
    this.props.showModal(val);
  };

  render() {
    return (
      <Row xs={1} sm={2} md={3} lg={4}>
        {this.props.data.map((animal) => (
          <HornedBeasts animal={animal} showModal={this.showModal} />
        ))}
      </Row>
    );
  }
}

export default Main;

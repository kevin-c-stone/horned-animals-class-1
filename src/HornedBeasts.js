import { Component } from "react";

class HornedBeasts extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imageURL}
          alt={"Narwhal baby"}
          title={this.props.title}
        ></img>
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeasts;

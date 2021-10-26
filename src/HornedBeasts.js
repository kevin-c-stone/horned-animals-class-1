import { Component } from "react";

class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  handleClick = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  };

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.imageURL}
          alt={this.props.keyword}
          title={this.props.title}
          onClick={this.handleClick}
        ></img>
        <p>&hearts;: {this.state.favorites}</p>
        <p>Number of Horns: {this.props.horns}</p>
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeasts;

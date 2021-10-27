import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
      <div class="card-box">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.imageURL}
            alt={this.props.keyword}
            title={this.props.title}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Horn Count: {this.props.horns}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>&hearts;: {this.state.favorites}</Card.Text>
            <Button variant="primary" onClick={this.handleClick}>
              Favorite
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;

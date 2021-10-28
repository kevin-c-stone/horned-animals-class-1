import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// PARENT in DEMO

class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  handleClickFavorite = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  };

  handleClickModal = (val) => {
    this.props.showModal(val);
  };

  render() {
    return (
      <div class="card-box">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={this.props.animal.image_url}
            alt={this.props.animal.keyword}
            title={this.props.animal.title}
            onClick={() => this.handleClickModal(this.props.animal)}
          />
          <Card.Body>
            <Card.Title>{this.props.animal.title}</Card.Title>
            <Card.Text>Horn Count: {this.props.animal.horns}</Card.Text>
            <Card.Text>{this.props.animal.description}</Card.Text>
            <Button variant="primary" onClick={this.handleClickFavorite}>
              &hearts;: {this.state.favorites}
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;

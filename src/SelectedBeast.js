import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// CHILD from lecture

export default class SelectedBeast extends Component {
  handleClose = () => {
    this.props.hideModal();
  };

  render() {
    return (
      <div>
        <Modal size="lg" show={this.props.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.animal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body
            src={this.props.animal.image_url}
            alt={this.props.animal.keyword}
          />

          <Modal.Body>{this.props.animal.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// FUNCTION that needs to handle modal

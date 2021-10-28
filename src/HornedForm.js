import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default class HornedForm extends Component {
  handleChange = (event) => {
    let selection = event.target.value;
    this.props.filterBeasts(selection);
  };

  render() {
    return (
      <div>
        <Form>
          <FloatingLabel controlId="floatingSelect" label="Select Horn Count">
            <Form.Select
              onChange={this.handleChange}
              aria-label="Floating label select example"
            >
              <option value="all">All</option>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3 or More</option>
            </Form.Select>
          </FloatingLabel>
        </Form>
      </div>
    );
  }
}

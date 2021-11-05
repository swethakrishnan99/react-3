import React, { Component } from "react";

export default class FormSubmit extends Component {
  addFeedBack = (e) => {
    e.preventDefault();
    const details = {
      id: this.props.staffDetails.length,
      name: this.props.inputValues.name,
      department: this.props.inputValues.department,
      rating: this.props.inputValues.rating,
    };
    const temp = [...this.props.staffDetails];
    temp.push(details);
    this.props.updateStaff(temp);
    this.props.resetInput();
  };
  render() {
    const btnDisable =
      this.props.inputValues.name === "" ||
      this.props.inputValues.department === "" ||
      this.props.inputValues.rating <= 0 ||
      this.props.inputValues.rating > 5;
    return (
      <button type="submit" onClick={this.addFeedBack} disabled={btnDisable}>
        Submit
      </button>
    );
  }
}

import { Component } from "react";
import FormSubmit from "./FormSubmit";

export default class Form extends Component {
  state = { name: "", department: "", rating: 0 };
  resetInput = () => {
    this.setState({ name: "", department: "", rating: 0 });
  };
  render() {
    return (
      <form action="" style={{ display: "block" }}>
        <h1>EMPLOY FEEDBACK FORM</h1>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />

        <label htmlFor="department">Department :</label>
        <input
          type="text"
          name="department"
          id="department"
          value={this.state.department}
          onChange={(e) => this.setState({ department: e.target.value })}
        />
        <br />

        <label htmlFor="rating">Rating :</label>
        <input
          type="number"
          name="rating"
          id="rating"
          value={this.state.rating}
          min="1"
          max="5"
          onChange={(e) => this.setState({ rating: e.target.value })}
        />
        <br />
        <FormSubmit
          staffDetails={this.props.staffDetails}
          updateStaff={this.props.updateStaff}
          inputValues={this.state}
          resetInput={this.resetInput}
        />
      </form>
    );
  }
}

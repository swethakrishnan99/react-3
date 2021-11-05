import "./App.css";
import { Component } from "react";
import Form from "./components/Form/Form";
import Employee from "./components/Employee/Employee";

class App extends Component {
  state = { staffDetails: [], isToggleOn: false };
  updateStaff = (temp) => {
    this.setState({ staffDetails: temp });
    this.updateToggle();
  };
  updateToggle = () => {
    this.setState((prevState) => {
      return { isToggleOn: !prevState.isToggleOn };
    });
  };
  render() {
    return (
      <>
        {this.state.isToggleOn ? (
          <Employee
            updateToggle={this.updateToggle}
            staffDetails={this.state.staffDetails}
          />
        ) : (
          <Form
            staffDetails={this.state.staffDetails}
            updateStaff={this.updateStaff}
          />
        )}
      </>
    );
  }
}

export default App;

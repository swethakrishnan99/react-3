import { Component } from "react";
import "./Employee.css";
function Entrys(props) {
  return (
    <li className="entry-list-item">
      <span>
        Name :&nbsp;{props.item.name} &emsp;|&emsp; Department :&nbsp;
        {props.item.department} &emsp;| &emsp;Rating :&nbsp;{props.item.rating}
      </span>
    </li>
  );
}

class Employee extends Component {
  goBack = () => {
    document.querySelector("form").style.display = "block";
    document.querySelector("#feedbackData").style.display = "none";
  };
  render() {
    return (
      <div id="feedbackData" style={{ display: "none" }}>
        <h1>EMPLOYEE FEEDBACK DATA</h1>
        <ul className="entry-list">
          {this.props.person.map((item) => {
            return <Entrys key={item.id} item={item} />;
          })}
        </ul>
        <button id="goBack" onClick={this.goBack}>
          Go Back
        </button>
      </div>
    );
  }
}
export default Employee;

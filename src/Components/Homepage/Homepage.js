import React from "react";
import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import "./Homepage.css";

const Homepage = (props) => {
  const dropdownSelect = (selection) => {
    if (selection.value == "Simple Division") {
      props.history.push("/division")
    }
  };

  return (
    <div className="homepage">
      <h1>Welcome!</h1>
      <br />
      <div className="homepage__content">
        <p>Select type of problems:</p>
        <div className="questions-select">
          <Dropdown
            placeholder="Select a type"
            options={["Simple Division"]}
            onSelect={dropdownSelect}
          />
        </div>
      </div>
    </div>
  );
};
export default Homepage;

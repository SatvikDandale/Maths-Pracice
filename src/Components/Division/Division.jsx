import React from "react";
import { Dropdown } from "react-dropdown-now";
import Question from "./Question";
import "./Division.css";

export default (props) => {
  const [difficulty, setDifficulty] = React.useState("");
  const [a, setA] = React.useState(true);

  const difficultySelect = (selection) => {
      console.log("HERER")
    console.log(a, !a)
      setA(!a);
    setDifficulty(selection.value);
  };

  return (
    <div className="simple-division">
      <h1>Simple Division</h1>
      <div className="division-content">
        <h2>Select Difficulty:</h2>
        <div className="difficultySelect">
          <Dropdown
            placeholder="Difficulty"
            options={["Easy", "Medium"]}
            onSelect={difficultySelect}
          />
        </div>
      </div>
      {difficulty && <Question a={a} difficulty={difficulty} />}
    </div>
  );
};

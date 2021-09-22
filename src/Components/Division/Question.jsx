import React from "react";

export default ({ difficulty }) => {
  const [data, setData] = React.useState({
    divisor: Math.floor(Math.random()*10),
    dividend: Math.floor(Math.random()*1000),
  });
  
  const generateNew = () => {
      setData({
        divisor: Math.floor(Math.random()*10),
        dividend: Math.floor(Math.random()*1000),
      })
  }

  const inputChangeHandler = (event) => {
      setData({
          ...data,
          [event.target.id]: event.target.value
      })
  }

  const onSubmit = () => {
    let r = Math.floor(data.dividend % data.divisor);
    let q = parseInt((data.dividend / data.divisor).toFixed(1));
    if (data.remainder == r && data.quotient == q) {
        alert("Correct")
        generateNew();
    } else {
        alert("Incorrect");
    }
  }

  return (
    <div className="question division_q">
      <p>
        <b>Question: </b>
        Divisor: <b>{data.divisor} </b>
        Dividend: <b>{data.dividend}</b>
      </p>
      <div className="answer-section">
        <b>Answer:</b>
        <div className="answer">
          <input type="number" id="quotient" onChange={inputChangeHandler} placeholder="Enter Quotient"></input>
          <input type="number" id="remainder" onChange={inputChangeHandler}  placeholder="Enter Remainder"></input>
          <button className="division-answer-submit" type="button" onClick={onSubmit}>
              Submit
          </button>
        </div>
      </div>
    </div>
  );
};

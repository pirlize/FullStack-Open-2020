import React, { useState } from "react";

//Component to display Button
const Button = (props) => (
  <button onClick={props.handleClick}> {props.text} </button>
);

//Component to display a single Stat
const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

//Component to display all stats
const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral;
  if (all === 0) {
    return <p>no feedbacks given</p>;
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={props.good} />
          <Statistic text="bad" value={props.bad} />
          <Statistic text="neutral" value={props.neutral} />
          <Statistic text="total" value={all} />
          <Statistic text="Average" value={(props.good - props.bad) / all} />
          <Statistic
            text="Positive"
            value={Math.floor((props.good / all) * 100)}
          />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];
  // Store selected anecdote
  const [selected, setSelected] = useState(0);

  // Store votes in an initially zero-filled array of length equal to the number of anecdotes
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // Function to select a random anecdote
  const randomQuote = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  // Function to store votes
  const registerVote = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };
  // Function that returns the index of the anecdote with the most number of votes
  const findWinner = () => votes.indexOf(Math.max(...votes));
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={registerVote}>Vote</button>
      <button onClick={randomQuote}>Change quote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[findWinner()]}</p>
      <p>has {votes[findWinner()]} votes</p>
    </div>
  );
};

export default App;

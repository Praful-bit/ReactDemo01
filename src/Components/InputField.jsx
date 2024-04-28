/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./InputField.css"; // Import CSS file for styling

function InputField() {
  const [inputval, setInputval] = useState("");
  const [monitor, setMonitor] = useState("");
  const [votes, setVotes] = useState([]);
  const [count, setCount] = useState(0);
  const [sureshCount, setSureshCount] = useState(0);
  const [deepankCount, setDeepankCount] = useState(0);
  const [abhikCount, setAbhikCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVote = {
      studentName: inputval,
      chosenMonitor: monitor,
    };
    setVotes([...votes, newVote]);
    setCount(count + 1);
    if (monitor === "Suresh") {
      setSureshCount(sureshCount + 1);
    } else if (monitor === "Deepank") {
      setDeepankCount(deepankCount + 1);
    } else if (monitor === "Abhik") {
      setAbhikCount(abhikCount + 1);
    }
    setInputval("");
    console.log("New Vote:", newVote);
    console.log("All Votes:", votes);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="vote-info">
          <h1>Class Monitor Vote</h1>
          <h3>Total Votes: {count}</h3>
        </div>
        <label htmlFor="Input">Student Name: </label>
        <input
          type="text"
          placeholder="Student Name"
          id="Input"
          onChange={(e) => setInputval(e.target.value)}
          value={inputval}
        />
        <label htmlFor="monitor">Choose Monitor: </label>
        <select id="monitor" onChange={(e) => setMonitor(e.target.value)}>
          <option value="Select">Select</option>
          <option value="Suresh">Suresh</option>
          <option value="Deepank">Deepank</option>
          <option value="Abhik">Abhik</option>
        </select>

        <button type="submit">Vote</button>
      </form>
      <h2>All Votes:</h2>
      <ul>
        <li>Suresh: {sureshCount}</li>
        {votes.map((vote, index) => {
          if (vote.chosenMonitor === "Suresh") {
            return <li key={index}>Student: {vote.studentName}</li>;
          }
          return null;
        })}
      </ul>
      <ul>
        <li>Deepank: {deepankCount}</li>
        {votes.map((vote, index) => {
          if (vote.chosenMonitor === "Deepank") {
            return <li key={index}>Student: {vote.studentName}</li>;
          }
          return null;
        })}
      </ul>
      <ul>
        <li>Abhik: {abhikCount}</li>
        {votes.map((vote, index) => {
          if (vote.chosenMonitor === "Abhik") {
            return <li key={index}>Student: {vote.studentName}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default InputField;

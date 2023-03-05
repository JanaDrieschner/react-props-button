import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("You clicked a button");
  }
  return (
    <div>
      <Button color="green" text="click Me" onClick={handleClick} />
      <Button color="red" disabled text="click Me" onClick={handleClick} />
      <Greeting name={{ name: "Jana" }} />
    </div>
  );
}

function Button({ color, text, disabled, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function Greeting({ name }) {
  <h1> Hello {"Jana"} </h1>;
}

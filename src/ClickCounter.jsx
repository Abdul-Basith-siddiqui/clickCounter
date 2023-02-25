import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import ReactiveButton from "reactive-button";
function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const resetClick = () => {
    setCount(0);
  };

  const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;
  `;

  const text = {
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textAlign: "center",
    fontSize: 30,
    background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    webkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const bright = {
    filter: "brightness(1)",
  };

  const buttonStyle2 = {
    backgroundImage: "linear-gradient(to right, #FF00FF, #FFFF00)",
    border: "none",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "25px",
  };

  const buttonStyle = {
    backgroundImage: "linear-gradient(to bottom, #FF00FF, #FFFF00)",
    border: "none",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "25px",
  };

  return (
    <div style={bright}>
      <h1 style={{ color: "wheat" }}>Click Counter</h1>
      <br />
      <Bounce>
        <p style={text}>Count: {count}</p>
      </Bounce>
      <div>
        <ReactiveButton
          rounded
          idleText="click me"
          onClick={handleClick}
          style={buttonStyle}
        />
        <ReactiveButton
          rounded
          idleText="Reset me"
          onClick={resetClick}
          style={buttonStyle2}
          Reset
        />
      </div>
    </div>
  );
}

export default ClickCounter;

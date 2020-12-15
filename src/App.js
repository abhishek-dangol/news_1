import logo from "./logo.svg";
import "./App.css";
import UsNews from "./components/usNews";
import BbcNews from "./components/bbcNews";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function App() {
  document.title = "Dan News";
  const Button = styled.button`
    background-color: #7985cb;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    box-shadow: 0px 2px 2px lightgray;
    text-transform: uppercase;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
      background-color: #283593;
    }
  `;

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Consolas",
        color: "green",
      }}
    >
      <h1>Dan's news app</h1>
      <div>
        <Button>US</Button>
        <Button>BBC</Button>
      </div>
      <UsNews />
    </div>
  );
}

export default App;

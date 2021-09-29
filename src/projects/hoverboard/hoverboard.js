import React from "react";
import { Body, Board, Square } from "./styled";

export default function Hoverboard() {
  const Squares = new Array(500).fill("");
  const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
  return (
    <Body>
      <Board>
        {Squares.map((ele, i) => (
          <Square key={i} color={randomColor()} />
        ))}
      </Board>
    </Body>
  );
}

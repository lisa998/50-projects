import { styled } from "@material-ui/core";
import React from "react";

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
const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "85vh",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#111",
});
const Board = styled("div")({
  position: "relative",
  display: "flex",
  width: 400,
  height: 500,
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
});
const Square = styled("div")({
  position: "relative",
  height: 16,
  width: 16,
  margin: 2,
  backgroundColor: "rgb(29, 29, 29)",
  flexShrink: 0,
  transition: "2s ease",
  "&:hover": {
    backgroundColor: (props) => props.color,
    boxShadow: (props) => `0 0 2px ${props.color}, 0 0 10px ${props.color}`,
    transition: "0s",
  },
});

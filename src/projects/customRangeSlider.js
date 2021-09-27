import { styled } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export default function CustomRangeSlider() {
  const [value, setValue] = useState(50);
  return (
    <Body>
      <h1 style={{ color: "purple" }}>Custom Range Slider</h1>
      <Input
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Body>
  );
}
const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontFamily: "'Lato', sans-serif",
  alignItems: "center",
  height: "50vh",
  justifyContent: "space-evenly",
});

const Input = styled("input")({
  width: 300,
  "-webkit-appearance": "none",
  background: "transparent",
  cursor: "pointer",
  position: "relative",
  "&::before": {
    boxShadow: "0px 0px 10px 2px rgba(156,156,156,1)",
    content: (props) => `"${props.value}"`,
    position: "absolute",
    padding: "7px 0px",
    width: 50,
    textAlign: "center",
    top: -45,
    left: (props) => (props.value / 10) * 27.5,
    transform: "translateX(-12px)",
    borderRadius: 5,
  },
  "&::-webkit-slider-thumb": {
    backgroundColor: "white",
    border: "2px solid purple",
    borderRadius: "50%",
    width: 25,
    height: 25,
    "-webkit-appearance": "none",
    position: "relative",
    top: -7,
  },
  "&::-webkit-slider-runnable-track": {
    backgroundColor: "purple",
    width: "100%",
    height: 10,
    borderRadius: 10,
  },
});

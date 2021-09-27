import { styled } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState, useMemo } from "react";

export default function AutoTextEffect() {
  const [value, setValue] = useState(1);
  const [content, setContent] = useState("");
  const text = "We Love Programming!";

  let time = useMemo(() => {
    if (value > 0 && value < 11) {
      return 300 / value;
    } else {
      return 300;
    }
  }, [value]);

  const handleChange = (e) => {
    if (e.target.value > 10) {
      setValue(10);
    } else if (e.target.value < 1) {
      setValue("");
    } else {
      setValue(e.target.value);
    }
  };
  useEffect(() => {
    let count = 0;
    let id = setInterval(() => {
      count = (count + 1) % (text.length + 1);
      setContent(text.slice(0, count));
    }, time);
    return () => clearInterval(id);
  }, [time]);
  return (
    <Body>
      <h1>{content}</h1>
      <InputBox>
        Speed:
        <Input
          type="number"
          step="1"
          min="0"
          max="10"
          value={value}
          onChange={handleChange}
        ></Input>
      </InputBox>
    </Body>
  );
}

const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70vh",
  backgroundColor: "darksalmon",
  fontFamily: "'Roboto', sans-serif",
});
const Input = styled("input")({
  border: 0,
  width: 60,
  padding: 10,
  fontSize: 24,
  backgroundColor: "darksalmon",
  "&:focus-visible": {
    outline: "none",
  },
});
const InputBox = styled("div")({
  fontSize: 22,
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  padding: "1rem",
  position: "absolute",
  top: "70%",
});

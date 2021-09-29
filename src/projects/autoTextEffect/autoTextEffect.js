import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import { Body, Input, InputBox } from "./styled";

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

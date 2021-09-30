import React from "react";
import { useState } from "react";
import { Body, Input } from "./styled";

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

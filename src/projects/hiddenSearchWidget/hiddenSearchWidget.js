import { useState } from "react";
import React from "react";
import { Body, Icon } from "./styled";

export default function SearchBar() {
  let [width, setWidth] = useState(0);
  const styledInput = {
    outline: "none",
    border: "none",
    height: 40,
    width: width,
    transition: "0.2s ease-in",
  };
  const toggleSearch = () => {
    if (width === 0) {
      setWidth(200);
    } else {
      setWidth(0);
    }
  };
  return (
    <Body>
      <input placeholder="Search..." style={styledInput} />
      <Icon className="fas fa-search" onClick={() => toggleSearch()}></Icon>
    </Body>
  );
}

import { styled } from "@material-ui/styles";
import { useState } from "react";
import React from "react";

const Body = styled("div")({
  boxSizing: "border-box",
  fonFamily: "sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "500px",
  overflow: "hidden",
  margin: 0,
  fontSize: 32,
  backgroundColor: "#3f51b573",
});

const styledIcon = {
  background: "white",
  cursor: "pointer",
  padding: 4,
  color: "#3f51b573",
};

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
      <i
        class="fas fa-search"
        style={styledIcon}
        onClick={() => toggleSearch()}
      ></i>
    </Body>
  );
}

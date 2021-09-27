import { styled } from "@material-ui/styles";
import { useState } from "react";
import React from "react";

export default function ButtonRippleEffect() {
  const [click, setClick] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [scale, setScale] = useState(0);
  const handleClick = (e) => {
    setClick(true);
    console.log(e);
    const x = e.clientX;
    const y = e.clientY;
    const buttonX = e.target.offsetLeft;
    const buttonY = e.target.offsetTop;
    setTop(x - buttonX);
    setLeft(y - buttonY);
    setScale(0);
    setTimeout(() => {
      setClick(false);
      setScale(3);
    }, 1);
  };
  return (
    <Body>
      <Btn onClick={handleClick}>
        CLICK ME
        <Circle
          top={top}
          left={left}
          scale={scale}
          opacity={click ? 1 : 0}
          translate={click ? null : "0.5s ease-out"}
        />
      </Btn>
    </Body>
  );
}
const Body = styled("div")({
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "black",
});
const Btn = styled("div")({
  backgroundColor: "purple",
  color: "#fff",
  border: "1px purple solid",
  fontSize: 14,
  letterSpacing: "2px",
  padding: "20px 30px",
  overflow: "hidden",
  margin: "10px 0",
  position: "relative",
});
const Circle = styled("div")({
  position: "absolute",
  top: (props) => props.top,
  left: (props) => props.left,
  width: 100,
  height: 100,
  borderRadius: "50%",
  opacity: (props) => props.opacity,
  transform: (props) => `scale(${props.scale})`,
  zIndex: 1,
  backgroundColor: "white",
  transition: (props) => props.translate,
  transformOrigin: "center",
});

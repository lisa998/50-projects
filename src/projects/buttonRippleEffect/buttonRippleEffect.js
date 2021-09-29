import { useState } from "react";
import React from "react";
import { Body, Btn, Circle } from "./styled";

export default function ButtonRippleEffect() {
  const [click, setClick] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [scale, setScale] = useState(0);
  const handleClick = (e) => {
    setClick(true);
    const buttonX = e.nativeEvent.offsetX;
    const buttonY = e.nativeEvent.offsetY;
    setTop(buttonY);
    setLeft(buttonX);
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
          transition={click ? null : "0.5s ease-out"}
        />
      </Btn>
    </Body>
  );
}

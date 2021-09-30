import React from "react";
import { useState } from "react";
import { Body, Btn, BoxesContainer, Box } from "./styled";

export default function BoxesBackground() {
  const [big, setBig] = useState(0);
  const [click, setClick] = useState(0);
  const boxArr = [];
  for (let i = 0; i < 720; i += 180) {
    for (let j = 0; j < 480; j += 120) {
      boxArr.push(`-${i}px -${j}px`);
    }
  }
  return (
    <Body>
      <Btn
        onClick={() => setBig(+!big)}
        onMouseDown={() => setClick(1)}
        onMouseUp={() => setClick(0)}
        click={click}
      >
        Magic
      </Btn>
      <BoxesContainer big={big}>
        {boxArr.map((ele) => (
          <Box position={ele} big={big} key={ele} />
        ))}
      </BoxesContainer>
    </Body>
  );
}

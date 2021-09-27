import { styled } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export default function BoxesBackground() {
  const [big, setBig] = useState(false);
  const [click, setClick] = useState(false);
  const boxArr = [];
  for (let i = 0; i < 720; i += 180) {
    for (let j = 0; j < 480; j += 120) {
      boxArr.push(`-${i}px -${j}px`);
    }
  }
  return (
    <Body>
      <Btn
        onClick={() => setBig(!big)}
        onMouseDown={() => setClick(true)}
        onMouseUp={() => setClick(false)}
        click={click}
      >
        Magic
      </Btn>
      <BoxesContainer big={big}>
        {boxArr.map((ele) => (
          <Box position={ele} big={big} />
        ))}
      </BoxesContainer>
    </Body>
  );
}

const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontFamily: "'Poppins', sans-serif",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  top: 30,
});
const Btn = styled("div")({
  padding: 15,
  borderRadius: 3,
  boxShadow: (props) =>
    props.click ? null : "5px 5px 5px 0px rgb(216 198 185)",
  background: "rgb(171 156 145)",
  color: "white",
  fontSize: 24,
  margin: 20,
  border: 0,
  position: "absolute",
  top: (props) => (props.click ? -30 : -35),
  cursor: "pointer",
});
const BoxesContainer = styled("div")({
  width: (props) => (props.big ? 835 : 720),
  height: (props) => (props.big ? 565 : 480),
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "space-between",
  alignContent: "space-around",
});
const Box = styled("div")({
  backgroundImage:
    "url('https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164_960_720.jpg')",
  width: 180,
  height: 120,
  backgroundPosition: (props) => props.position,
  backgroundSize: "720px 480px",
  flexShrink: 0,
  backgroundRepeat: " no-repeat",
  position: "relative",
  transform: (props) => (props.big ? "rotateZ(360deg)" : null),
  transition: "0.3s ease",
  "&::before": {
    content: '""',
    width: 180,
    height: 15,
    transform: "skewX(45deg)",
    position: "absolute",
    backgroundColor: "rgb(171 156 145)",
    top: 120,
    left: 8,
  },
  "&::after": {
    content: '""',
    width: 15,
    height: 120,
    transform: "skewY(45deg)",
    position: "absolute",
    backgroundColor: "rgb(216 198 185)",
    top: 8,
    left: 180,
  },
});

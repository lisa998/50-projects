import { styled } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";

export default function AnimatedCountdown() {
  const [num, setNum] = useState(3);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setNum(2);
    }, 1000);
    setTimeout(() => {
      setNum(1);
    }, 2000);
    setTimeout(() => {
      setNum(0);
    }, 3000);
    setTimeout(() => {
      setHide(true);
    }, 3100);
  }, []);
  return (
    <Body>
      <Div hide={hide}>
        <div style={{ overflow: "hidden" }}>
          <Num>{num}</Num>
        </div>
        <div>GET READY</div>
      </Div>

      <Div hide={!hide}>
        <div style={{ fontSize: 40 }}>GO</div>
        <button onClick={() => window.location.reload()}>Replay</button>
      </Div>
    </Body>
  );
}
const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "85vh",
  fontFamily: "'Roboto', sans-serif",
  flexWrap: "wrap",
});
const Num = styled("div")({
  fontSize: 40,
  textAlign: "center",
  width: 100,
  transform: "rotate(120deg)",
  transformOrigin: "bottom",
  animation: "rotate 1s ease-in-out",
  animationIterationCount: 3,
  color: "#3498db",
});
const Div = styled("div")({
  left: "50%",
  top: 300,
  position: "absolute",
  transform: (props) =>
    props.hide ? "scale(0) translateX(-50%)" : "scale(1) translateX(-50%)",
  transition: "0.1s  ease-in-out",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transformOrigin: "center",
});

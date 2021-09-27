import { styled } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export default function AnimatedNavigation() {
  const btn = ["Home", "Works", "About", "Contact"];
  const [active, setActive] = useState(true);
  return (
    <Body>
      <Nav active={active}>
        {btn.map((b, i) => (
          <Btn active={active} key={i}>
            {b}
          </Btn>
        ))}
        <Icon active={active} onClick={() => setActive(!active)}>
          <Line rotate={active ? -765 : 0} active={active} />
          <Line
            rotate={active ? 765 : 0}
            top={active ? -2 : 10}
            active={active}
          />
        </Icon>
      </Nav>
    </Body>
  );
}
const Body = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70vh",
  backgroundColor: "#3a3a3a",
  fontFamily: "'Muli', sans-serif",
});
const Nav = styled("div")({
  height: 63,
  position: "relative",
  display: "flex",
  color: "white",
  background: "linear-gradient(to right, #654ea3, #eaafc8)",
  margin: 20,
  boxShadow: "0 2px 5px rgb(0 0 0 / 30%)",
  borderRadius: 3,
  transition: "0.6s linear",
  width: (props) => (props.active ? 400 : 80),
});

const Btn = styled("div")({
  position: "relative",
  top: 20,
  paddingRight: (props) => (props.active ? 20 : 0),
  paddingLeft: (props) => (props.active ? 20 : 0),
  transform: (props) => (props.active ? "rotateY(360deg) " : "rotateY(0deg)"),
  opacity: (props) => (props.active ? 1 : 0),
  transition: "0.6s linear",
});
const Icon = styled("div")({
  padding: 20,
  transition: "0.6s linear",
  cursor: "pointer",
  position: "relative",
  top: (props) => (props.active ? 10 : 5),
  transform: (props) =>
    props.active ? "translateX(-10px)" : "translateX(-178px)",
});
const Line = styled("div")({
  position: "relative",
  top: (props) => `${props.top}px`,
  width: 20,
  height: 2,
  margin: "0px",
  backgroundColor: (props) => (props.active ? "rgb(103 80 164)" : "white"),
  transform: (props) => `rotateZ(${props.rotate}deg)`,
  transition: "0.6s linear",
});

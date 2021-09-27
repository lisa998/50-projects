import { styled } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export default function SwitchBtn() {
  const [choices, setChoices] = useState([
    { title: "Good", active: false },
    { title: "Cheap", active: false },
    { title: "Fast", active: false },
  ]);

  return (
    <Body>
      <h1>How do you want your project to be?</h1>
      {choices.map((ele) => (
        <CheckBox
          choice={ele}
          setChoices={setChoices}
          key={ele.title}
          choices={choices}
        />
      ))}
    </Body>
  );
}
const CheckBox = ({ choice, setChoices, choices }) => {
  let target = "";
  const handleCheck = (e) => {
    target = e.target.value;
    if (
      choices[0].active &&
      choices[1].active &&
      !choices[2].active &&
      target === choices[2].title
    ) {
      setChoices([
        { title: "Good", active: true },
        { title: "Cheap", active: false },
        { title: "Fast", active: true },
      ]);
    } else if (
      choices[0].active &&
      choices[2].active &&
      !choices[1].active &&
      target === choices[1].title
    ) {
      setChoices([
        { title: "Good", active: false },
        { title: "Cheap", active: true },
        { title: "Fast", active: true },
      ]);
    } else if (
      choices[1].active &&
      choices[2].active &&
      !choices[0].active &&
      target === choices[0].title
    ) {
      setChoices([
        { title: "Good", active: true },
        { title: "Cheap", active: true },
        { title: "Fast", active: false },
      ]);
    } else {
      setChoices(
        choices.map((ele) => {
          if (ele.title === target) {
            if (ele.title !== target) {
            }
            return { ...ele, active: !ele.active };
          } else {
            return ele;
          }
        })
      );
    }
  };

  return (
    <Container>
      <input
        type="checkbox"
        id={choice.title}
        style={{ opacity: 0 }}
        value={choice.title}
        checked={choice.active}
        onChange={handleCheck}
      />
      <label htmlFor={choice.title}>
        <Oval active={choice.active}>
          <Circle active={choice.active} />
        </Oval>
      </label>
      <span>{choice.title}</span>
    </Container>
  );
};

const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70vh",
  fontFamily: "monospace",
});

const Container = styled("div")({
  display: "flex",
  padding: 10,
  width: 200,
  alignItems: "center",
  justifyContent: "flex-start",
});
const Oval = styled("div")({
  width: 80,
  height: 40,
  borderRadius: 40,
  display: "flex",
  alignItems: "center",
  padding: 4,
  backgroundColor: (props) => (props.active ? "#8e44ad" : "#D0D0D0"),
  marginRight: 10,
  cursor: "pointer",
  position: "relative",
});
const Circle = styled("div")({
  width: 34,
  height: 34,
  backgroundColor: "#fff",
  borderRadius: "50%",
  position: "relative",
  transform: (props) => (props.active ? " translateX(113%)" : null),
  transition: "0.3s ease-in",
});

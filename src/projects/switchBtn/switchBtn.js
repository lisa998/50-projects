import React from "react";
import { useState } from "react";
import { Body, Container, Oval, Circle } from "./styled";

export default function SwitchBtn() {
  const [choices, setChoices] = useState([
    { title: "Good", active: 0 },
    { title: "Cheap", active: 0 },
    { title: "Fast", active: 0 },
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
        { title: "Good", active: 1 },
        { title: "Cheap", active: 0 },
        { title: "Fast", active: 1 },
      ]);
    } else if (
      choices[0].active &&
      choices[2].active &&
      !choices[1].active &&
      target === choices[1].title
    ) {
      setChoices([
        { title: "Good", active: 0 },
        { title: "Cheap", active: 1 },
        { title: "Fast", active: 1 },
      ]);
    } else if (
      choices[1].active &&
      choices[2].active &&
      !choices[0].active &&
      target === choices[0].title
    ) {
      setChoices([
        { title: "Good", active: 1 },
        { title: "Cheap", active: 1 },
        { title: "Fast", active: 0 },
      ]);
    } else {
      setChoices(
        choices.map((ele) => {
          if (ele.title === target) {
            if (ele.title !== target) {
            }
            return { ...ele, active: +!ele.active };
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

import {
  Body,
  P,
  Glass,
  Empty,
  Water,
  GlassesContainer,
  LittleGlass,
} from "./styled";
import { useState, useMemo } from "react";
import React from "react";

export default function DrinkWater() {
  const [level, setLevel] = useState(0);
  const active = useMemo(() => {
    let full = Array(level).fill(true);
    let empty = Array(8 - level).fill(false);
    return full.concat(empty);
  }, [level]);
  const handleLevel = (clickLevel) => {
    if (clickLevel === level) {
      setLevel(level - 1);
    } else {
      setLevel(clickLevel);
    }
  };
  return (
    <Body>
      <h1>Drink Water</h1>
      <P>Goal: 2 Liters</P>
      <Glass>
        <Empty height={100 - level * 12.5}>
          {level < 8 ? (
            <h3 style={{ margin: 0 }}>{2 - level * 0.25}L</h3>
          ) : null}
          {level < 8 ? <P>Remained</P> : null}
        </Empty>
        <Water height={level * 12.5}>
          {level > 0 ? <h1>{level * 12.5}%</h1> : null}
        </Water>
      </Glass>
      <P>Select how many glasses of water that you have drank</P>
      <GlassesContainer>
        {active.map((ele, i) => {
          return (
            <LittleGlass
              active={+ele}
              onClick={() => handleLevel(i + 1)}
              key={i}
            >
              <P>250</P>
              <P>ml</P>
            </LittleGlass>
          );
        })}
      </GlassesContainer>
    </Body>
  );
}

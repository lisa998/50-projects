import { useState, useEffect, useMemo } from "react";
import React from "react";
import {
  Body,
  Btn,
  StyledClock,
  ClockContainer,
  Needle,
  Info,
  Day,
  Circle,
} from "./styled";

export default function ThemeClock() {
  const [lightMode, setLightMode] = useState(true);
  return (
    <Body mode={+lightMode}>
      <Btn mode={+lightMode} onClick={() => setLightMode(!lightMode)}>
        {lightMode ? "Light Mode" : "Dark Mode"}
      </Btn>
      <Clock mode={+lightMode} />
    </Body>
  );
}

const Clock = ({ mode }) => {
  const [today, setToday] = useState(new Date());
  const week = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "Saturday",
  ];
  const Month = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const date = useMemo(() => today.getDate(), [today]);
  const day = useMemo(() => today.getDay(), [today]);
  const month = useMemo(() => today.getMonth(), [today]);
  const hr = useMemo(() => today.getHours(), [today]);
  const min = useMemo(() => today.getMinutes(), [today]);
  const sec = useMemo(() => today.getSeconds(), [today]);
  useEffect(() => {
    const id = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <StyledClock mode={mode}>
      <ClockContainer>
        <Circle />
        <Circle little={1} />
        <Needle
          hr={1}
          mode={mode ? "black" : "white"}
          deg={hr * 30 + min * 0.5}
        />
        <Needle mode={mode ? "black" : "white"} deg={min * 6 + sec * 0.5} />
        <Needle sec={1} deg={sec * 6} />
      </ClockContainer>
      <h1>
        {(hr % 12).toString().padStart(2, "0")}:
        {min.toString().padStart(2, "0")} {hr > 12 ? "PM" : "AM"}
      </h1>
      <Info>
        {week[day]}, {Month[month]}
        <Day mode={mode}>{date}</Day>
      </Info>
    </StyledClock>
  );
};

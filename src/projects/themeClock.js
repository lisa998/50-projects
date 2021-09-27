import { styled } from "@material-ui/styles";
import { useState, useEffect, useMemo } from "react";
import React from "react";
export default function ThemeClock() {
  const [lightMode, setLightMode] = useState(true);
  return (
    <Body mode={lightMode}>
      <Btn mode={lightMode} onClick={() => setLightMode(!lightMode)}>
        {lightMode ? "Light Mode" : "Dark Mode"}
      </Btn>
      <Clock mode={lightMode} />
    </Body>
  );
}
const Body = styled("div")({
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  position: "relative",
  backgroundColor: (props) => (props.mode ? "white" : "black"),
  fontFamily: "'Heebo', sans-serif",
});
const Btn = styled("div")({
  borderRadius: 5,
  width: 100,
  height: 34,
  backgroundColor: (props) => (props.mode ? "black" : "white"),
  color: (props) => (props.mode ? "white" : "black"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 14,
  margin: "50px 0px 100px",
});
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
        <Circle little={true} />
        <Needle
          hr={true}
          mode={mode ? "black" : "white"}
          deg={hr * 30 + min * 0.5}
        />
        <Needle mode={mode ? "black" : "white"} deg={min * 6 + sec * 0.5} />
        <Needle sec={true} deg={sec * 6} />
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
const StyledClock = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: (props) => (props.mode ? "black" : "white"),
  backgroundColor: (props) => (props.mode ? "white" : "black"),
});
const ClockContainer = styled("div")({
  position: "relative",
  height: 200,
  width: 200,
  marginBottom: 25,
});

const Needle = styled("div")({
  width: 3,
  height: (props) => (props.hr ? 65 : 100),
  transformOrigin: "50% 100%",
  position: "absolute",
  right: 98.5,
  top: (props) => (props.hr ? 35 : null),
  backgroundColor: (props) => (props.sec ? "red" : props.mode),
  transform: (props) => ` rotate(${props.deg}deg)`,
});

const Info = styled("div")({
  color: "#aaa",
  display: "flex",
  fontSize: 14,
});

const Day = styled("span")({
  backgroundColor: (props) => (props.mode ? "black" : "white"),
  color: (props) => (props.mode ? "white" : "black"),
  borderRadius: "20%",
  width: 20,
  textAlign: "center",
  marginLeft: 5,
});

const Circle = styled("div")({
  backgroundColor: (props) => (props.little ? "black" : "red"),
  width: (props) => (props.little ? 5 : 10),
  height: (props) => (props.little ? 5 : 10),
  position: "absolute",
  top: "50%",
  right: "50%",
  borderRadius: "50%",
  zIndex: 3,
  transform: "translate(50%,-50%)",
});

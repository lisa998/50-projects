import { styled } from "@material-ui/styles";
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
            <LittleGlass active={ele} onClick={() => handleLevel(i + 1)}>
              <P>250</P>
              <P>ml</P>
            </LittleGlass>
          );
        })}
      </GlassesContainer>
    </Body>
  );
}

const Body = styled("div")({
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  fontFamily: "'Montserrat', sans-serif",
  position: "relative",
  backgroundColor: "#3494e4",
  color: "white",
  fontSize: 20,
});
const P = styled("p")({
  position: "relative",
  margin: 0,
});
const Glass = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: 370,
  width: 170,
  border: "5px solid #144fc6",
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  marginBottom: 30,
  position: "relative",
  overflow: "hidden",
});
const Empty = styled("div")({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  color: "#144fc6",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s",
  height: (props) => `${props.height}%`,
});
const Water = styled("div")({
  backgroundColor: "#6ab3f8",
  display: "flex",
  flex: 1,
  color: "#144fc6",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s",
  height: (props) => `${props.height}%`,
});
const GlassesContainer = styled("div")({
  width: 280,
  height: 210,
  position: "relative",
  marginTop: 30,
});
const LittleGlass = styled("div")({
  borderBottomLeftRadius: 18,
  borderBottomRightRadius: 18,
  width: 50,
  height: 90,
  backgroundColor: (props) => (props.active ? "#6ab3f8" : "#ebf4fc"),
  color: (props) => (props.active ? "white" : "#144fc6"),
  border: "5px solid #144fc6",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  margin: 10,
  cursor: "pointer",
});

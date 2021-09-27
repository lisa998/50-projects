import { styled } from "@material-ui/styles";
import { useState } from "react";
import React from "react";

export default function SplitLandingPage() {
  return (
    <Body>
      <Split
        title={"Dog"}
        color={"rgb(94 171 151)"}
        url={"https://d.newsweek.com/en/full/1817497/border-collie-dog.jpg"}
      />
      <Split
        title={"Cat"}
        color={"rgb(242 208 107)"}
        url={
          "https://media.wired.com/photos/5c01dae1246e082ceb3670f7/master/w_2400,h_1602,c_limit/Cat-gift-guide-750913925.jpg"
        }
      />
    </Body>
  );
}
const Body = styled("div")({
  height: "100%",
  display: "flex",
  fontFamily: "'Roboto', sans-serif",
});
const Split = ({ color, url, title }) => {
  let [flex, setFlex] = useState(1);
  return (
    <StyledSplit
      url={url}
      color={color}
      flex={flex}
      onMouseOver={() => setFlex(2.5)}
      onMouseOut={() => setFlex(1)}
    >
      <h1 style={{ fontSize: 60, zIndex: 5 }}>{title}</h1>
      <Btn color={color}>ADOPT NOW</Btn>
    </StyledSplit>
  );
};
const StyledSplit = styled("div")({
  height: "80vh",
  flex: (props) => props.flex,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  backgroundImage: (props) => `url(${props.url})`,
  color: "white",
  textShadow: "gray 0.1em 0.1em 0.2em",
  backgroundPosition: "center",
  backgroundSize: "cover",
  transition: "0.5s ease-in",
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(255 255 255 / 40%)",
  },
});
const Btn = styled("div")({
  width: 210,
  padding: 27,
  color: "white",
  fontWeight: 700,
  backgroundColor: "transparent",
  border: "5px solid white",
  textAlign: "center",
  "&:hover": { backgroundColor: (props) => props.color, cursor: "pointer" },
  zIndex: 5,
});

import { useState } from "react";
import React from "react";
import { Body, StyledSplit, Btn } from "./styled";

export default function SplitLandingPage() {
  return (
    <Body>
      <Split
        title={"Cat"}
        color={"rgb(242 208 107)"}
        url={
          "https://media.wired.com/photos/5c01dae1246e082ceb3670f7/master/w_2400,h_1602,c_limit/Cat-gift-guide-750913925.jpg"
        }
      />
      <Split
        title={"Dog"}
        color={"rgb(94 171 151)"}
        url={"https://d.newsweek.com/en/full/1817497/border-collie-dog.jpg"}
      />
    </Body>
  );
}

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

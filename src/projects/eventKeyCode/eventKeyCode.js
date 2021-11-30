import { useEffect, useState } from "react";
import { Body, Box, StyledBoxs, BoxDiv } from "./styled";

export default function EventKeyCode() {
  const [key, setKey] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKey([e.key, e.keyCode, e.code]);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <Body>
      {key ? <Boxs info={key} /> : <Box> Press any key to get the keyCode</Box>}
    </Body>
  );
}

const Boxs = ({ info }) => {
  const tag = ["event.key", "event.keyCode", "event.code"];
  return (
    <StyledBoxs>
      {info.map((k, i) => {
        return (
          <BoxDiv key={k}>
            <div style={{ width: "auto", margin: "auto" }}>{tag[i]}</div>
            <Box>{k}</Box>
          </BoxDiv>
        );
      })}
    </StyledBoxs>
  );
};

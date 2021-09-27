import { styled } from "@material-ui/core";
import { useEffect, useState } from "react";

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

const Body = styled("div")({
  display: "flex",
  width: "100%",
  fontFamily: "'Muli', sans-serif",
  height: "80vh",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 700,
  outline: "none",
  color: "#5a5959",
});
const Box = styled("div")({
  border: "1px solid black",
  padding: 15,
  boxShadow: "2px 2px 5px 0px rgba(89,89,89,1)",
  textAlign: "center",
});
const Boxs = ({ info }) => {
  const tag = ["event.key", "event.keyCode", "event.code"];
  console.log(info);
  return (
    <StyledBoxs>
      {info.map((k, i) => {
        return (
          <BoxDiv>
            <div style={{ width: "auto", margin: "auto" }}>{tag[i]}</div>
            <Box>{k}</Box>
          </BoxDiv>
        );
      })}
    </StyledBoxs>
  );
};
const StyledBoxs = styled("div")({
  display: "flex",
});

const BoxDiv = styled("div")({
  display: "flex",
  margin: 30,
  minWidth: 150,
  flexDirection: "column",
});

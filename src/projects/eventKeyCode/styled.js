import { styled } from "@material-ui/core";

export const Body = styled("div")({
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
export const Box = styled("div")({
  border: "1px solid black",
  padding: 15,
  boxShadow: "2px 2px 5px 0px rgba(89,89,89,1)",
  textAlign: "center",
});
export const StyledBoxs = styled("div")({
  display: "flex",
});

export const BoxDiv = styled("div")({
  display: "flex",
  margin: 30,
  minWidth: 150,
  flexDirection: "column",
});

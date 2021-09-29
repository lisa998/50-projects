import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70vh",
  fontFamily: "monospace",
});

export const Container = styled("div")({
  display: "flex",
  padding: 10,
  width: 200,
  alignItems: "center",
  justifyContent: "flex-start",
});
export const Oval = styled("div")({
  width: 80,
  height: 40,
  borderRadius: 40,
  display: "flex",
  alignItems: "center",
  padding: 4,
  backgroundColor: (props) => (props.active ? "#8e44ad" : "#D0D0D0"),
  marginRight: 10,
  cursor: "pointer",
  position: "relative",
});
export const Circle = styled("div")({
  width: 34,
  height: 34,
  backgroundColor: "#fff",
  borderRadius: "50%",
  position: "relative",
  transform: (props) => (props.active ? " translateX(113%)" : null),
  transition: "0.3s ease-in",
});

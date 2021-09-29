import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "85vh",
  fontFamily: "'Roboto', sans-serif",
  flexWrap: "wrap",
});
export const Num = styled("div")({
  fontSize: 40,
  textAlign: "center",
  width: 100,
  transform: "rotate(120deg)",
  transformOrigin: "bottom",
  animation: "rotate 1s ease-in-out",
  animationIterationCount: 3,
  color: "#3498db",
});
export const Div = styled("div")({
  left: "50%",
  top: 300,
  position: "absolute",
  transform: (props) =>
    props.hide ? "scale(0) translateX(-50%)" : "scale(1) translateX(-50%)",
  transition: "0.1s  ease-in-out",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transformOrigin: "center",
});

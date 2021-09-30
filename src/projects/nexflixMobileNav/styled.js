import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "85vh",
  fontFamily: "'Muli', sans-serif",
});
export const NavBtn = styled("div")({
  padding: 5,
  position: "absolute",
  fontSize: 24,
  top: (props) => props.top,
  left: (props) => props.left,
  right: (props) => props.right,
  cursor: "pointer",
});
export const Div = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});
export const ColorDiv = styled("div")({
  position: "absolute",
  backgroundColor: (props) => props.color,
  width: (props) => props.width,
  height: "100%",
  left: 0,
  padding: 30,
  transform: (props) => (props.active ? "translateX(0%)" : "translateX(-100%)"),
  transition: "0.3s ease-in",
});

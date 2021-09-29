import { styled } from "@material-ui/styles";

export const Body = styled("div")({
  boxSizing: "border-box",
  fontFamily: "'Muli', sans-serif",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "500px",
  overflow: "hidden",
  margin: 0,
});
export const StyledSteps = styled("div")({
  boxSizing: "border-box",
  display: "flex",
  position: "relative",
  fontSize: 30,
  color: "#e0e0e0",
});
export const Line = styled("div")({
  boxSizing: "border-box",
  position: "absolute",
  height: 4,
  top: 52,
  left: 45,
  zIndex: (props) => props.zindex,
  width: (props) => `${props.width}%`,
  backgroundColor: (props) => (props.bgcolor ? props.bgcolor : "#3498db"),
  transition: "0.4s ease",
});
export const StyledStep = styled("div")({
  boxSizing: "border-box",
  position: "relative",
  width: "auto",
  background: "white",
  margin: 33,
  color: (props) => (props.active ? "#3498db" : "#e0e0e0"),
});
export const Circle = styled("div")({
  boxSizing: "border-box",
  position: "relative",
  backgroundColor: "white",
});
export const Num = styled("span")({
  boxSizing: "border-box",
  position: "absolute",
  fontSize: 22,
  color: "#999",
  right: 10,
  top: 3,
});
export const Btn = styled("div")({
  boxSizing: "border-box",
  backgroundColor: (props) => (props.prevent ? "#e0e0e0" : "#3498db"),
  fontSize: 12,
  color: "white",
  width: 93,
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 30px",
  margin: 5,
  borderRadius: 5,
});
export const Btns = styled("div")({
  boxSizing: "border-box",
  display: "flex",
  cursor: "pointer",
});

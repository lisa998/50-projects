import { styled } from "@material-ui/styles";
export const Body = styled("div")({
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "black",
  position: "relative",
});
export const Btn = styled("div")({
  backgroundColor: "purple",
  color: "#fff",
  border: "1px purple solid",
  fontSize: 14,
  letterSpacing: "2px",
  padding: "20px 30px",
  overflow: "hidden",
  margin: "10px 0",
  position: "relative",
  cursor: "pointer",
});
export const Circle = styled("div")({
  position: "absolute",
  top: (props) => props.top,
  left: (props) => props.left,
  width: 100,
  height: 100,
  borderRadius: "50%",
  opacity: (props) => props.opacity,
  transform: (props) => `translate(-50%, -50%) scale(${props.scale})`,
  pointerEvents: "none",
  zIndex: 1,
  backgroundColor: "white",
  transition: (props) => props.transition,
  transformOrigin: "center",
});

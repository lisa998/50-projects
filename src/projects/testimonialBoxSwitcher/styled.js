import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  width: "100%",
  height: "85vh",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'Montserrat', sans-serif",
  letterSpacing: 3,
  lineHeight: "1.5rem",
});
export const Content = styled("div")({
  padding: "50px 80px",
  backgroundColor: "#476ce4",
  color: "white",
  width: 800,
  borderRadius: 10,
  position: "relative",
});
export const Img = styled("img")({
  width: 75,
  height: 75,
  objectFit: "cover",
  borderRadius: "50%",
});
export const Icon = styled("div")({
  fontSize: 26,
  opacity: 0.7,
  position: "absolute",
  top: 60,
  left: (props) => props.left,
  right: (props) => props.right,
});
export const Line = styled("div")({
  width: "100%",
  height: 4,
  backgroundColor: "white",
  transition: (props) => (props.active ? "5s linear" : null),
  transform: (props) => (props.active ? "translateX(0%)" : "translateX(-100%)"),
});

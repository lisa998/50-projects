import { styled } from "@material-ui/styles";

export const NavBar = styled("div")({
  position: "fixed",
  bottom: 100,
});
export const Body = styled("div")({
  position: "relative",
  backgroundColor: "#333",
  height: "100%",
  width: "100%",
  overflow: "hidden",
  fontFamily: "'Lato', sans-serif",
});
export const Circle = styled("div")({
  position: "absolute",
  borderRadius: "50%",
  height: 160,
  width: 160,
  backgroundColor: "#ff7979",
  top: -80,
  left: -80,
  color: "white",
  transform: (props) => (props.nav ? `rotate(-90deg)` : null),
  transition: "0.5s ease-in",
  zIndex: 1,
});
export const Content = styled("div")({
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  padding: "50px",
  backgroundColor: "white",
  transform: (props) => (props.open ? "rotate(-20deg)" : null),
  transformOrigin: "0% 0%",
  transition: "0.5s ease-in",
  zIndex: -1,
});
export const Icon = styled("div")({
  position: "relative",
  fontSize: 24,
  left: (props) => props.left,
  top: (props) => props.top,
});
export const Italic = styled("span")({
  color: "gray",
  fontSize: "16px",
  top: -20,
  fontStyle: "italic",
  position: "relative",
});
export const Btn = styled("div")({
  position: "relative",
  left: (props) => props.left,
  display: "flex",
  fontSize: 18,
  color: "#fff",
  margin: 40,
  alignItems: "center",
  transition: "0.7s ease-in",
});

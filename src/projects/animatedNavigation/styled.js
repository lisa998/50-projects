import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70vh",
  backgroundColor: "#3a3a3a",
  fontFamily: "'Muli', sans-serif",
});
export const Nav = styled("div")({
  height: 63,
  position: "relative",
  display: "flex",
  color: "white",
  background: "linear-gradient(to right, #654ea3, #eaafc8)",
  margin: 20,
  boxShadow: "0 2px 5px rgb(0 0 0 / 30%)",
  borderRadius: 3,
  transition: "0.6s linear",
  width: (props) => (props.active ? 400 : 80),
});

export const Btn = styled("div")({
  position: "relative",
  top: 20,
  paddingRight: (props) => (props.active ? 20 : 0),
  paddingLeft: (props) => (props.active ? 20 : 0),
  transform: (props) => (props.active ? "rotateY(360deg) " : "rotateY(0deg)"),
  opacity: (props) => (props.active ? 1 : 0),
  transition: "0.6s linear",
});
export const Icon = styled("div")({
  padding: 20,
  transition: "0.6s linear",
  cursor: "pointer",
  position: "relative",
  top: (props) => (props.active ? 10 : 5),
  transform: (props) =>
    props.active ? "translateX(-10px)" : "translateX(-178px)",
});
export const Line = styled("div")({
  position: "relative",
  top: (props) => `${props.top}px`,
  width: 20,
  height: 2,
  margin: "0px",
  backgroundColor: (props) => (props.active ? "rgb(103 80 164)" : "white"),
  transform: (props) => `rotateZ(${props.rotate}deg)`,
  transition: "0.6s linear",
});

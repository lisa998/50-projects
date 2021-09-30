import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  width: "100%",
  height: "60vh",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: " #f5f5f5",
  color: "#543a31",
  fontFamily: "'Press Start 2P', sans-serif",
  flexDirection: "column",
  overflow: "hidden",
});
export const Img = styled("img")({
  width: 100,
  objectFit: "cover",
  marginTop: 30,
  bottom: (props) => props.bottom,
  left: (props) => (props.reverse ? "101%" : null),
  right: (props) => (props.reverse ? null : "101%"),
  position: (props) => (props.bottom ? "absolute" : null),
  transform: (props) => (props.reverse ? "scaleX(-1)" : null),
  animation: (props) =>
    props.reverse ? "move 5s linear" : "reverseMove 5s linear",
});
export const Box = styled("div")({
  width: 200,
  height: 220,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #d4a34f",
  margin: 10,
  transition: "0.1s ease-in",
  position: "relative",
  color: "#d4a34f",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#d4a34f",
    color: "white",
  },
});
export const H5 = styled("h5")({
  position: "absolute",
  top: 0,
  left: (props) => props.left,
  right: (props) => props.right,
});

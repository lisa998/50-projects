import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontFamily: "'Open Sans', sans-serif",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
});
export const Phone = styled("div")({
  position: "relative",
  overflow: "hidden",
  border: " 3px solid #eee",
  borderRadius: 15,
  height: 600,
  width: 340,
});
export const Img = styled("div")({
  opacity: (props) => (props.show ? 1 : 0),
  height: 524,
  width: 340,
  position: "absolute",
  backgroundImage: (props) => `url('${props.pic}')`,
  backgroundSize: "cover",
  left: 0,
  top: 0,
  backgroundPosition: (props) => props.position,
  transition: "opacity 0.2s ease",
});
export const StyledBtn = styled("div")({
  padding: 10,
  textAlign: "center",
  cursor: "pointer",
  color: (props) => (props.active ? "#8e44ad" : null),
  "&:hover": {
    color: "#8e44ad",
  },
});
export const Icon = styled("i")({
  width: 24,
  height: 24,
});

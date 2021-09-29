import { styled } from "@material-ui/styles";

export const Body = styled("div")({
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "#2c3e50",
  position: "relative",
});
export const Triangle = styled("div")({
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderWidth: "0 50px 50px 50px",
  borderColor: "transparent transparent white transparent",
  position: (props) => props.absolute,
  transformOrigin: "50% 0%",
  transform: (props) => props.transform,
  transition: "transform 0.5s linear",
});

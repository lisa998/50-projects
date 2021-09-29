import { styled } from "@material-ui/styles";
export const Body = styled("div")({
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});
export const Canvas = styled("canvas")({
  border: "2px solid steelblue",
});
export const Toolbar = styled("div")({
  display: "flex",
  border: "2px solid steelblue",
  backgroundColor: "steelblue",
  padding: 18,
  width: 800,
  position: "relative",
});
export const Btn = styled("div")({
  backgroundColor: "white",
  width: 50,
  height: 50,
  margin: 4.5,
  padding: 4.5,
  fontSize: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

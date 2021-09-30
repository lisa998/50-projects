import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "85vh",
  alignItems: "center",
  fontFamily: "'Montserrat', sans-serif",
  overflow: "auto",
});
export const Img = styled("img")({
  width: 300,
  height: 300,
  objectFit: "cover",
  margin: 10,
});

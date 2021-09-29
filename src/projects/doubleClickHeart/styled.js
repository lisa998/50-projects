import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70vh",
  fontFamily: "'Oswald', sans-serif",
});
export const Img = styled("div")({
  backgroundImage:
    "url('https://kittenrescue.org/wp-content/uploads/2021/08/KittenRescue_Cat_FurBall2021-scaled.jpg')",
  width: 600,
  height: 400,
  backgroundSize: "cover",
  boxShadow: "0px 0px 12px 0px rgba(71,71,71,1)",
  cursor: "pointer",
  position: "relative",
});

import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "85vh",
  fontFamily: "'Roboto', sans-serif",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
});
export const Div = styled("div")({
  width: 500,
  height: 536,
  overflow: "hidden",
});
export const ImgContainer = styled("div")({
  width: 500,
  height: 500,
  display: "flex",
  transform: (props) => `translateX(-${props.page * 500}px)`,
  transition: "0.5s ease-in-out;",
});
export const Img = styled("div")({
  backgroundImage: (props) => (props.url ? `url('${props.url}')` : null),
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: 500,
  height: 500,
  flexShrink: 0,
});
export const Btn = styled("div")({
  backgroundColor: "rgb(36 132 114)",
  width: 240,
  height: 36,
  color: "white",
  fontSize: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    opacity: 0.7,
  },
  cursor: "pointer",
});

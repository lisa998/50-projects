import { styled } from "@material-ui/core";
export const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontFamily: "'Lato', sans-serif",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(to right, #d4d3dd, #efefbb)",
  minHeight: "80vh",
});
export const Div = styled("div")({
  width: 160,
  height: 270,
  padding: 20,
  margin: 10,
  backgroundColor: (props) => props.color,
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
export const Pic = styled("div")({
  width: 120,
  height: 120,
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  backgroundImage: (props) => `url('${props.img}')`,
  backgroundSize: "cover",
});
export const IdContainer = styled("div")({
  padding: "5px 10px",
  borderRadius: 10,
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  marginTop: 10,
});

import { styled } from "@material-ui/styles";

export const Body = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

export const Content = styled("div")({
  width: 400,
  height: 200,
  backgroundColor: "rgb(165 174 219)",
  margin: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 44,
  color: "white",
  borderRadius: 10,
  boxShadow: "5px 5px 5px 0px rgba(138,138,138,1)",
  left: (props) => (props.hide ? props.hide : "0%"),
  position: "relative",
  transition: "0.4s ease-in",
});

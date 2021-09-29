import { styled } from "@material-ui/core";

export const Body = styled("div")({
  width: "100%",
  height: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 40,
});
export const Content = styled("div")({
  color: "white",
  display: "flex",
  flexDirection: "column",
  padding: "50px 20px",
  minHeight: 350,
  width: 760,
  textAlign: "center",
  backgroundColor: "#6879d4d9",
  alignItems: "center",
  borderRadius: 5,
  fontSize: 24,
  textShadow: "gray 0.1em 0.1em 0.2em",
  boxShadow: "5px 5px 30px 0px rgba(171,171,171,1)",
  fontFamily: "'Roboto', sans-serif",
});

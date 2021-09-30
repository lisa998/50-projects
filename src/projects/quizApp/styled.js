import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  width: "100%",
  height: "85vh",
  fontFamily: "'Poppins', sans-serif",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
});
export const QuizContainer = styled("div")({
  display: (props) => (props.display ? "block" : "none"),
  position: "relative",
  width: 600,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  overflow: "hidden",
  boxShadow: "0 0 10px 2px rgb(100 100 100 / 10%)",
});
export const Content = styled("div")({
  position: "relative",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: 72,
});
export const Btn = styled("div")({
  backgroundColor: "#8e44ad",
  color: "white",
  padding: 20,
  width: "100%",
  position: "relative",
  bottom: 0,
  textAlign: "center",
  "&:hover": {
    backgroundColor: "#732d91",
  },
});

import { styled } from "@material-ui/styles";

export const Body = styled("div")({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  width: "100%",
  height: "80vh",
  flexDirection: "column",
  backgroundColor: "rebeccapurple",
  position: "relative",
  fontFamily: "'Poppins', sans-serif",
});
export const Box = styled("div")({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  padding: 18,
  fontSize: 16,
  backgroundColor: "white",
  color: (props) => (props.color ? props.color : "rebeccapurple"),
  fontWeight: 700,
  borderRadius: 5,
  margin: 20,
  cursor: (props) => (props.btn ? "pointer" : null),
  "&:active": {
    transform: (props) => (props.btn ? "scale(0.98)" : null),
  },
});
export const MessageContainer = styled("div")({
  position: "absolute",
  bottom: 20,
  right: 20,
  display: "flex",
  flexDirection: "column",
});

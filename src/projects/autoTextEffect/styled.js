import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70vh",
  backgroundColor: "darksalmon",
  fontFamily: "'Roboto', sans-serif",
});
export const Input = styled("input")({
  border: 0,
  width: 60,
  padding: 10,
  fontSize: 24,
  backgroundColor: "darksalmon",
  "&:focus-visible": {
    outline: "none",
  },
});
export const InputBox = styled("div")({
  fontSize: 22,
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  padding: "1rem",
  position: "absolute",
  top: "70%",
});

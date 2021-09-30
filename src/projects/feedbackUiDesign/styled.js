import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontFamily: "'Montserrat', sans-serif",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
});
export const Div = styled("div")({
  width: 450,
  boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
  textAlign: "center",
  padding: 20,
});
export const Choice = styled("div")({
  width: 120,
  height: 120,
  boxShadow: (props) => (props.active ? "0 0 10px rgb(0 0 0 / 10%)" : null),
  textAlign: "center",
  padding: 20,
  margin: "10px 5px 25px",
  flexShrink: 0,
  "&:hover": {
    boxShadow: "0 0 10px rgb(0 0 0 / 10%)",
  },
});
export const Btn = styled("button")({
  color: "white",
  backgroundColor: "black",
  padding: "12px 30px",
  borderRadius: 5,
  border: 0,
  "&:active": {
    transform: "scale(0.98)",
  },
});

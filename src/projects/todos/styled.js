import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  width: "100%",
  height: "85vh",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: " #f5f5f5",
  color: "#444",
  fontFamily: "'Poppins', sans-serif",
  flexDirection: "column",
  overflow: "auto",
});
export const H1 = styled("h1")({
  color: "rgb(179, 131, 226)",
  opacity: 0.4,
  fontSize: 120,
  marginBottom: "5rem",
});
export const Div = styled("div")({
  width: 400,
  boxShadow: "0 4px 10px rgb(0 0 0 / 10%)",
});
export const Input = styled("input")({
  outlineColor: "rgb(179, 131, 226)",
  border: "none",
  padding: "18px 36px",
  fontSize: "1.5rem",
  width: "100%",
  "&::placeholder": {
    opacity: "0.5",
  },
});
export const StyledTask = styled("div")({
  padding: "18px 36px",
  borderTop: "1px solid  rgb(0 0 0 / 10%)",
  backgroundColor: "white",
  textDecoration: (props) => (props.finished ? "line-through" : null),
  color: (props) => (props.finished ? "rgb(0 0 0 / 50%)" : null),
  fontSize: 28,
});

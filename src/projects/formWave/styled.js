import { styled } from "@material-ui/core";

export const Body = styled("div")({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  fontFamily: "'Muli', sans-serif",
});
export const FormBox = styled("div")({
  display: "flex",
  alignContent: "center",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: 400,
  width: 400,
  padding: "20px 50px",
  flexDirection: "column",
  backgroundColor: "#111d61",
  color: "white",
  borderRadius: 5,
});
export const Input = styled("input")({
  border: 0,
  outline: "none",
  backgroundColor: " rgba(0, 0, 0, 0)",
  color: "white",
  borderBottom: (props) => `2px solid ${props["border-color"]}`,
  padding: 5,
});
export const StyleEnterBlock = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: 300,
  margin: "20px 0px",
});

export const LoginBtn = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 50,
  width: 300,
  backgroundColor: "#d9deff",
  borderRadius: 5,
  margin: "20px 0px",
  color: "#111d61",
  cursor: "pointer",
});
export const StyledLabel = styled("label")({
  color: (props) => props.color,
});
export const StyledSpan = styled("span")({
  transition: "0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  display: "inline-block",
  transform: (props) => `translateY(${props["translate-y"]}px)`,
  transitionDelay: (props) => `${props.delay * 50}ms`,
});

import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontFamily: "'Muli', sans-serif",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
});
export const Div = styled("div")({
  padding: 30,
  border: "3px solid black",
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: 680,
});
export const TextDiv = styled("div")({
  backgroundColor: "#eaeaea",
  padding: 10,
  borderRadius: 10,
  margin: "30px 5px 5px",
});
export const Input = styled("input")({
  width: 100,
  height: 120,
  margin: 6,
  padding: "1px 2px",
  fontSize: 75,
  textAlign: "center",
  borderRadius: 5,
  border: (props) => (props.active ? "1px solid #3498db" : "1px solid #eee"),
  boxShadow: (props) =>
    props.active ? "0 10px 10px -5px rgb(0 0 0 / 25%)" : null,
  "&::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
  },
});

import { styled } from "@material-ui/core";
export const Body = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "90%",
  fontFamily: "'Muli', sans-serif",
});

export const Textarea = styled("textarea")({
  width: 400,
  height: 150,
  margin: "10px  0px 30px 0px",
});
export const Options = styled("div")({
  display: "flex",
});
export const Option = styled("div")({
  padding: "5px 15px",
  margin: 5,
  borderRadius: 100,
  color: "white",
  backgroundColor: (props) => (props.active ? "#e42d95" : "#313f8c"),
});

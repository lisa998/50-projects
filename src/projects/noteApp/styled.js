import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  width: "100%",
  height: "85vh",
  fontFamily: "'Poppins', sans-serif",
  backgroundColor: "#7bdaf3",
  flexWrap: "wrap",
  overflowY: "scroll",
  minWidth: 1050,
});
export const StyledNote = styled("div")({
  width: 400,
  height: 400,
  boxShadow: "0 0 10px 4px rgb(0 0 0 / 10%)",
  backgroundColor: "white",
  margin: 20,
});
export const Tool = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});
export const Icon = styled("div")({
  cursor: "pointer",
  color: "white",
  padding: 10,
  fontSize: 20,
});
export const AddBtn = styled("div")({
  backgroundColor: "#9ec862",
  color: "white",
  padding: "0.5rem 1rem",
  borderRadius: 5,
  position: "absolute",
  top: 10,
  right: 10,
});

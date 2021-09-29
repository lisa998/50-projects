import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70vh",
  flexDirection: "column",
  color: "#FBFCFF",
  backgroundColor: "#D0CCD0",
  fontFamily: "'Muli', sans-serif",
});
export const Container = styled("div")({
  padding: "1rem",
  backgroundColor: "#274156",
});
export const Input = styled("input")({
  border: 0,
  padding: 10,
  "&:focus-visible": {
    outline: "none",
  },
});
export const SettingBox = styled("div")({
  display: "flex",
  margin: "15px 0",
  width: 310,
  justifyContent: "space-between",
  alignItems: "center",
});
export const Btn = styled("div")({
  width: 310,
  cursor: "pointer",
  padding: "10px 15px",
  textAlign: "center",
  backgroundColor: "#1C6E8C",
});
export const Psw = styled("div")({
  width: 310,
  height: 50,
  padding: "8px 12px",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  fontSize: 24,
  backgroundColor: "#0c2940",
  position: "relative",
});
export const BtnPaste = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  backgroundColor: "#1C6E8C",
  cursor: "pointer",
  position: "absolute",
  right: 8,
});

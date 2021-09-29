import { styled } from "@material-ui/styles";

export const Body = styled("div")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  fontFamily: "'Poppins', sans-serif",
  position: "relative",
  backgroundColor: "#22254b",
  color: "white",
  fontSize: 20,
});
export const Nav = styled("div")({
  backgroundColor: "#373b69",
  display: "flex",
  justifyContent: "flex-end",
});
export const Input = styled("input")({
  outline: "none",
  backgroundColor: "#373b69",
  borderRadius: 50,
  margin: 20,
  color: "white",
  padding: "10px 15px",
  border: "2px solid #22254b",
  "&:focus": {
    backgroundColor: "#22254b",
  },
  "&::placeholder": {
    color: "#5e62b3",
  },
});
export const Movie = styled("div")({
  width: 300,
  maxHeight: 560,
  minHeight: 80,
  margin: 18,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#373b69",
  boxShadow: "0 4px 5px rgb(0 0 0 / 20%)",
  borderRadius: 5,
  overflow: "hidden",
});
export const Img = styled("img")({
  width: "100%",
  height: 450,
});
export const Info = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "9px 18px 18px",
});
export const Score = styled("div")({
  minWidth: 30,
  height: 36,
  position: "relative",
  backgroundColor: "#22254b",
  borderRadius: 5,
  color: (props) => props.color,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2px 7px",
});

export const Overview = styled("div")({
  position: "absolute",
  backgroundColor: "white",
  bottom: 0,
  color: "black",
  padding: "1.5rem",
  fontSize: 18,
  zIndex: 2,
  transform: (props) => (props.active ? "translateY(0%)" : "translateY(101%)"),
  transition: "0.2s ease-in",
});

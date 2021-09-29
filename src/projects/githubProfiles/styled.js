import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70vh",
  backgroundColor: "#333",
  fontFamily: "'Poppins', sans-serif",
});
export const Input = styled("input")({
  width: "45vw",
  backgroundColor: "#e2e2e2",
  color: "#5a5a5a",
  border: "none",
  borderRadius: 10,
  padding: "1rem",
  marginBottom: "2rem",
  fontSize: "1rem",
  boxShadow: "0 5px 10px rgb(154 160 185 / 5%), 0 15px 40px rgb(0 0 0 / 10%)",
  "&:focus-visible ": {
    outline: "none",
  },
});
export const Container = styled("div")({
  padding: "2rem",
  backgroundColor: "#e2e2e2",
  borderRadius: 10,
  color: "#5a5a5a",
  display: "flex",
  fontSize: 18,
  width: "50vw",
  minWidth: 750,
  overflow: "hidden",
});
export const Img = styled("div")({
  height: 150,
  width: 150,
  minWidth: 150,
  backgroundImage: (props) => `url('${props.src}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "50%",
  border: "7px solid #222",
  marginRight: "2rem",
});
export const Span = styled("span")({
  marginRight: "3rem",
});

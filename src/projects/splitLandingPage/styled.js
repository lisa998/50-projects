import { styled } from "@material-ui/styles";

export const Body = styled("div")({
  height: "100%",
  display: "flex",
  fontFamily: "'Roboto', sans-serif",
});

export const StyledSplit = styled("div")({
  height: "80vh",
  flex: (props) => props.flex,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  backgroundImage: (props) => `url(${props.url})`,
  color: "white",
  textShadow: "gray 0.1em 0.1em 0.2em",
  backgroundPosition: "center",
  backgroundSize: "cover",
  transition: "0.5s ease-in",
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(255 255 255 / 40%)",
  },
});
export const Btn = styled("div")({
  width: 210,
  padding: 27,
  color: "white",
  fontWeight: 700,
  backgroundColor: "transparent",
  border: "5px solid white",
  textAlign: "center",
  "&:hover": { backgroundColor: (props) => props.color, cursor: "pointer" },
  zIndex: 5,
});

import { styled } from "@material-ui/styles";
export const Body = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
  overflow: "hidden",
  margin: "10px",
  fontFamily: "'Muli', sans-serif",
});
export const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "90vw",
  maxWidth: 1200,
});

export const Panel = styled("div")({
  backgroundImage: (props) =>
    `url('https://images.unsplash.com/${props.url}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
  backgroundSize: "auto 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "70vh",
  flex: (props) => (props.flex ? props.flex : 0.5),
  margin: "10px",
  borderRadius: "50px",
  position: "relative",
  transition: "0.3s ease-in",
});
export const H3 = styled("h3")({
  position: "absolute",
  color: "white",
  bottom: "25px",
  left: "50px",
  opacity: (props) => (props.opacity ? props.opacity : 0),
  transition: "opacity 0.3s ease-in",
});

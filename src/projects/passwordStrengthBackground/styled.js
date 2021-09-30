import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  width: "85%",
  fontFamily: "monospace",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  backgroundImage: (props) =>
    props.img
      ? "url('https://www.torbayrd-vet.ca/wp-content/uploads/sites/66/2019/05/shutterstock_1011232045.jpg')"
      : null,
  filter: (props) => `blur(${props.strength}px)`,
  backgroundSize: "cover",
  zIndex: -1,
  borderRadius: 5,
});
export const Div = styled("form")({
  position: "relative",
  padding: 45,
  backgroundColor: "white",
  zIndex: 2,
  textAlign: "center",
  borderRadius: 5,
});
export const Btn = styled("div")({
  padding: 10,
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
  marginTop: 20,
  borderRadius: 5,
});

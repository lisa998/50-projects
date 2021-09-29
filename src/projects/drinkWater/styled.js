import { styled } from "@material-ui/styles";

export const Body = styled("div")({
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  fontFamily: "'Montserrat', sans-serif",
  position: "relative",
  backgroundColor: "#3494e4",
  color: "white",
  fontSize: 20,
});
export const P = styled("p")({
  position: "relative",
  margin: 0,
});
export const Glass = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: 370,
  width: 170,
  border: "5px solid #144fc6",
  borderBottomLeftRadius: 50,
  borderBottomRightRadius: 50,
  marginBottom: 30,
  position: "relative",
  overflow: "hidden",
});
export const Empty = styled("div")({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  color: "#144fc6",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s",
  height: (props) => `${props.height}%`,
});
export const Water = styled("div")({
  backgroundColor: "#6ab3f8",
  display: "flex",
  flex: 1,
  color: "#144fc6",
  alignItems: "center",
  justifyContent: "center",
  transition: "0.3s",
  height: (props) => `${props.height}%`,
});
export const GlassesContainer = styled("div")({
  width: 280,
  height: 210,
  position: "relative",
  margin: 30,
});
export const LittleGlass = styled("div")({
  borderBottomLeftRadius: 18,
  borderBottomRightRadius: 18,
  width: 50,
  height: 90,
  backgroundColor: (props) => (props.active ? "#6ab3f8" : "#ebf4fc"),
  color: (props) => (props.active ? "white" : "#144fc6"),
  border: "5px solid #144fc6",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  margin: 10,
  cursor: "pointer",
});

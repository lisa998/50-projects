import { styled } from "@material-ui/styles";

export const Body = styled("div")({
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  display: "flex",
  position: "relative",
  height: "85vh",
  fontFamily: "'Open Sans', sans-serif",
});
export const Pic = styled("div")({
  flexDirection: "column",
  flex: 2,
  height: "85vh",
  overflow: "hidden",
  position: "relative",
});
export const Img = styled("div")({
  width: "100%",
  backgroundImage: (props) => `url(${props.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  height: "100%",
  position: "relative",
  top: (props) => `-${3 - props.page}00%`,
  transition: "0.5s ease",
});
export const Words = styled("div")({
  flex: 1,
  width: "100%",
  height: "85vh",
  overflow: "hidden",
  position: "relative",
});
export const ContentBox = styled("div")({
  position: "relative",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  top: (props) => (props.page ? `-${props.page}00%` : 0),
  transition: "0.5s ease",
  backgroundColor: (props) => props.bgc,
});
export const Btn = styled("div")({
  position: "absolute",
  fontSize: 14,
  padding: 15,
  color: "#aaa",
  "&:hover": {
    color: "#222",
  },
  borderRadius: "0  5px 5px  0",
  left: (props) => (props.down ? "100%" : "0%"),
  zIndex: 5,
  backgroundColor: "white",
  transform: (props) =>
    props.down
      ? "rotate(180deg) translateY(-50%) translateX(100%)"
      : "translateY(-50%)",
  transition: "0.3s ease",
  top: "50%",
});

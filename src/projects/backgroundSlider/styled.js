import { styled } from "@material-ui/styles";

export const Body = styled("div")({
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "80vw",
  position: "relative",
  color: "white",
  fontSize: 20,
});
export const Pic = styled("div")({
  height: "100%",
  width: "100%",
  backgroundImage: (props) => `url(${props.bg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "absolute",
  top: 0,
  left: 0,
  transition: "0.4s",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    background: "black",
    opacity: 0.4,
    width: "100%",
    height: "100%",
  },
});

export const Btn = styled("div")({
  width: 70,
  height: 80,
  position: "absolute",
  border: "2px solid white",
  top: "50%",
  fontSize: "xx-large",
  transform: (props) =>
    props.left ? "translateY(-50%) translateX(-100%)" : "translateY(-50%)",
  left: (props) => (props.left ? "15%" : "85%"),
  zIndex: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});
export const SilderContainer = styled("div")({
  width: "70%",
  height: "80%",
  zIndex: 1,
  overflow: "hidden",
  position: "relative",
});
export const Slider = styled("div")({
  backgroundPosition: "center",
  backgroundImage: (props) => `url(${props.bg})`,
  zIndex: (props) => (props.show ? 2 : 1),
  width: "80vw",
  height: "80vh",
  top: "-8vh",
  left: "-12vw",
  position: "absolute",
  backgroundSize: "cover",
});

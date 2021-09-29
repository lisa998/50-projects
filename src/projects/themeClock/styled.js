import { styled } from "@material-ui/styles";
export const Body = styled("div")({
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  position: "relative",
  backgroundColor: (props) => (props.mode ? "white" : "black"),
  fontFamily: "'Heebo', sans-serif",
});
export const Btn = styled("div")({
  borderRadius: 5,
  width: 100,
  height: 34,
  backgroundColor: (props) => (props.mode ? "black" : "white"),
  color: (props) => (props.mode ? "white" : "black"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 14,
  margin: "50px 0px 100px",
});
export const StyledClock = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: (props) => (props.mode ? "black" : "white"),
  backgroundColor: (props) => (props.mode ? "white" : "black"),
});
export const ClockContainer = styled("div")({
  position: "relative",
  height: 200,
  width: 200,
  marginBottom: 25,
});

export const Needle = styled("div")({
  width: 3,
  height: (props) => (props.hr ? 65 : 100),
  transformOrigin: "50% 100%",
  position: "absolute",
  right: 98.5,
  top: (props) => (props.hr ? 35 : null),
  backgroundColor: (props) => (props.sec ? "red" : props.mode),
  transform: (props) => ` rotate(${props.deg}deg)`,
});

export const Info = styled("div")({
  color: "#aaa",
  display: "flex",
  fontSize: 14,
});

export const Day = styled("span")({
  backgroundColor: (props) => (props.mode ? "black" : "white"),
  color: (props) => (props.mode ? "white" : "black"),
  borderRadius: "20%",
  width: 20,
  textAlign: "center",
  marginLeft: 5,
});

export const Circle = styled("div")({
  backgroundColor: (props) => (props.little ? "black" : "red"),
  width: (props) => (props.little ? 5 : 10),
  height: (props) => (props.little ? 5 : 10),
  position: "absolute",
  top: "50%",
  right: "50%",
  borderRadius: "50%",
  zIndex: 3,
  transform: "translate(50%,-50%)",
});

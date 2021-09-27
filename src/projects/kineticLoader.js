import { styled } from "@material-ui/styles";
import { useEffect, useState } from "react";

export default function KineticLoader() {
  let [deg1, setDeg1] = useState(0);
  let [deg2, setDeg2] = useState(90);
  useEffect(() => {
    let id = setInterval(() => {
      setDeg2((deg) => deg + 180);
      setTimeout(() => {
        setDeg1((deg) => deg + 180);
      }, 500);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <Body>
      <Triangle transform={`rotate(${deg1}deg)`} />
      <Triangle absolute={"absolute"} transform={`rotate(${deg2}deg)`} />
    </Body>
  );
}
const Body = styled("div")({
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "#2c3e50",
  position: "relative",
});
const Triangle = styled("div")({
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderWidth: "0 50px 50px 50px",
  borderColor: "transparent transparent white transparent",
  position: (props) => props.absolute,
  transformOrigin: "50% 0%",
  transform: (props) => props.transform,
  transition: "transform 0.5s linear",
});

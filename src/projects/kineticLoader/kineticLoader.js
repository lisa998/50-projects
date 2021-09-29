import { useEffect, useState } from "react";
import { Body, Triangle } from "./styled";

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

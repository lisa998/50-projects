import React, { useEffect } from "react";
import { useState } from "react";
import { Body, Num, Div } from "./styled";

export default function AnimatedCountdown() {
  const [num, setNum] = useState(3);
  const [hide, setHide] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setNum(2);
    }, 1000);
    setTimeout(() => {
      setNum(1);
    }, 2000);
    setTimeout(() => {
      setNum(0);
      setTimeout(() => {
        setHide(1);
      }, 100);
    }, 3000);
  }, []);
  return (
    <Body>
      <Div hide={hide}>
        <div style={{ overflow: "hidden" }}>
          <Num>{num}</Num>
        </div>
        <div>GET READY</div>
      </Div>

      <Div hide={+!hide}>
        <div style={{ fontSize: 40 }}>GO</div>
        <button onClick={() => window.location.reload()}>Replay</button>
      </Div>
    </Body>
  );
}

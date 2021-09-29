import React from "react";
import { useState } from "react";
import { Body, Img } from "./styled";

export default function DoubleClickHeart() {
  const [click, setClick] = useState(0);
  const [place, setPlace] = useState([0, 0]);
  const [showHeart, setShowHeart] = useState(false);
  let clickTime = 0;
  const handleClick = (e) => {
    if (clickTime === 0) {
      clickTime = e.nativeEvent.timeStamp;
    } else {
      if (e.nativeEvent.timeStamp - clickTime < 800) {
        clickTime = 0;
        setClick((click) => click + 1);
        setPlace([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
        setShowHeart(true);
        setTimeout(() => {
          setShowHeart(false);
        }, 10);
      } else {
        clickTime = e.nativeEvent.timeStamp;
      }
    }
  };
  return (
    <Body>
      <h1>
        Double click on the image to{" "}
        <i className="fas fa-heart" style={{ color: "#e63654" }}></i> it
      </h1>
      <p style={{ fontSize: 20 }}>You liked it {click} times</p>
      <Img onClick={handleClick}>
        <i
          className="fas fa-heart"
          style={{
            color: "#e63654",
            fontSize: 50,
            opacity: showHeart ? 1 : 0,
            position: "absolute",
            transform: showHeart ? `scale(0.5) ` : `scale(1.5) `,
            transition: showHeart ? null : "0.2s ease-out",
            top: place[1],
            left: place[0],
          }}
        ></i>
      </Img>
    </Body>
  );
}

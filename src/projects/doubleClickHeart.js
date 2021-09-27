import { styled } from "@material-ui/core";
import React from "react";
import { useState } from "react";

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
const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70vh",
  fontFamily: "'Oswald', sans-serif",
});
const Img = styled("div")({
  backgroundImage:
    "url('https://kittenrescue.org/wp-content/uploads/2021/08/KittenRescue_Cat_FurBall2021-scaled.jpg')",
  width: 600,
  height: 400,
  backgroundSize: "cover",
  boxShadow: "0px 0px 12px 0px rgba(71,71,71,1)",
  cursor: "pointer",
  position: "relative",
});

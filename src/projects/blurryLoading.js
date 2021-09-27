import { styled } from "@material-ui/styles";
import { useEffect, useState } from "react";
import React from "react";

export default function BlurryLoading() {
  let [percent, setPercent] = useState(0);
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      setTimeout(() => {
        setPercent((p) => p + 1);
      }, 50);
      if (percent === 100) {
        setPercent(100);
      }
    }
    return () => {
      isMount = false;
    };
  }, [percent]);

  return (
    <Body>
      <Pic blur={(100 - percent) * 0.3} />
      <H1 opacity={(100 - percent) / 100}>{percent}%</H1>
    </Body>
  );
}
const Body = styled("div")({
  position: "relative",
  width: "80vw",
  height: "80vh",
});
const Pic = styled("div")({
  backgroundImage:
    "url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=980:*')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  filter: (props) => `blur(${props.blur}px)`,
  height: "100%",
  width: "100%",
  zIndex: -1,
});

const H1 = styled("h1")({
  color: "#fff03b",
  opacity: (props) => props.opacity,
  position: "relative",
  transform: "translate(0%, -50%)",
  top: "-50%",
  left: "50%",
  fontSize: 40,
});

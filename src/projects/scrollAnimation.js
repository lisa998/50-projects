import { styled } from "@material-ui/styles";
import { useEffect, useRef, useState } from "react";
import React from "react";

export default function ScrollAnimation() {
  const content = [
    { content: "Box1", startPlace: "0%" },
    { content: "Box2", startPlace: "0%" },
    { content: "Box3", startPlace: "100%" },
    { content: "Box4", startPlace: "-100%" },
    { content: "Box5", startPlace: "100%" },
    { content: "Box6", startPlace: "-100%" },
  ];
  return (
    <Body>
      <h1>Scroll to see the animation</h1>
      {content.map((c, i) => (
        <Box content={c} key={c.content} />
      ))}
    </Body>
  );
}

const Body = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

const Content = styled("div")({
  width: 400,
  height: 200,
  backgroundColor: "rgb(165 174 219)",
  margin: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 44,
  color: "white",
  borderRadius: 10,
  boxShadow: "5px 5px 5px 0px rgba(138,138,138,1)",
  left: (props) => (props.hide ? props.hide : "0%"),
  position: "relative",
  transition: "0.4s ease-in",
});

const Box = ({ content }) => {
  const boxRef = useRef();
  let [hide, setHide] = useState(content.startPlace);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollPos = window.innerHeight;
      const boxBottom = boxRef.current.getBoundingClientRect().bottom;
      if (boxBottom < scrollPos) {
        setHide("0%");
      } else {
        setHide(content.startPlace);
      }
    };
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [boxRef, content.startPlace]);

  return (
    <Content ref={boxRef} hide={hide}>
      {content.content}
    </Content>
  );
};

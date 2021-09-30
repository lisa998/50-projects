import { useState } from "react";
import React from "react";
import { Body, Container, Panel, H3 } from "./styled";

const Panels = ({ info, select, index, setSelect }) => {
  let flex = 0.5;
  let opacity = 0;
  if (select) {
    flex = 5;
    opacity = 1;
  }
  return (
    <Panel url={info.pic} flex={flex} onClick={() => setSelect(index)}>
      <H3 opacity={opacity}>{info.title}</H3>
    </Panel>
  );
};
export default function ExpandingCards() {
  const info = [
    { pic: "photo-1558979158-65a1eaa08691", title: "Explore The World" },
    { pic: "photo-1572276596237-5db2c3e16c5d", title: "Wild Forest" },
    { pic: "photo-1507525428034-b723cf961d3e", title: "Sunny Beach" },
    { pic: "photo-1551009175-8a68da93d5f9", title: "City on Winter" },
    { pic: "photo-1549880338-65ddcdfd017b", title: "Mountains - Clouds" },
  ];
  const [select, setSelect] = useState(0);
  return (
    <>
      <Body>
        <Container>
          {info.map((i, index) => (
            <Panels
              info={i}
              index={index}
              setSelect={setSelect}
              select={select === index}
              key={index}
            />
          ))}
        </Container>
      </Body>
    </>
  );
}

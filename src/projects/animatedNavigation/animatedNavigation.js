import React from "react";
import { useState } from "react";
import { Body, Nav, Btn, Icon, Line } from "./styled";

export default function AnimatedNavigation() {
  const btn = ["Home", "Works", "About", "Contact"];
  const [active, setActive] = useState(true);
  return (
    <Body>
      <Nav active={+active}>
        {btn.map((b, i) => (
          <Btn active={+active} key={i}>
            {b}
          </Btn>
        ))}
        <Icon active={+active} onClick={() => setActive(!active)}>
          <Line rotate={active ? -765 : 0} active={+active} />
          <Line
            rotate={active ? 765 : 0}
            top={active ? -2 : 10}
            active={+active}
          />
        </Icon>
      </Nav>
    </Body>
  );
}

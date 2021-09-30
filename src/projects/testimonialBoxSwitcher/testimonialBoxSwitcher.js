import React, { useEffect } from "react";
import { useState } from "react";
import { Body, Content, Img, Icon, Line } from "./styled";
import { testimonials } from "./data";

export default function TestimonialBoxSwitcher() {
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(0);
  useEffect(() => {
    setActive(true);
    let id = setInterval(() => {
      setActive(false);
      setTimeout(() => {
        setActive(true);
        setPage((page) => (page + 1) % testimonials.length);
      }, 10);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <Body>
      <Content>
        <div style={{ width: "100%", height: 4, overflow: "hidden" }}>
          <Line active={+active} />
        </div>
        <Icon right={40}>
          <i className="fas fa-quote-right fa-quote"></i>
        </Icon>
        <Icon left={40}>
          <i className="fas fa-quote-left fa-quote"></i>
        </Icon>
        <p style={{ marginTop: 30 }}>{testimonials[page].text}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Img src={testimonials[page].photo} alt="" />
          <div style={{ marginLeft: 15 }}>
            <h5>{testimonials[page].name}</h5>
            <p>{testimonials[page].position}</p>
          </div>
        </div>
      </Content>
    </Body>
  );
}

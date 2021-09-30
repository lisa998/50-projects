import React from "react";
import { useState } from "react";
import { Body, NavBtn, Div, ColorDiv } from "./styled";

export default function NexflixMobileNav() {
  const [active, setActive] = useState(0);
  const openNav = () => {
    setActive(1);
    setTimeout(() => {
      setActive(2);
    }, 300);
    setTimeout(() => {
      setActive(3);
    }, 600);
  };
  return (
    <Body>
      <NavBtn onClick={openNav} top={8} left={15}>
        <i className="fas fa-bars"></i>
      </NavBtn>
      <Div>
        <img
          src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-700x188.png"
          alt="logo"
          style={{ width: 150, height: 40 }}
        />
        <h3>MOBILE NAVIGATION</h3>
      </Div>
      <ColorDiv color="black" width={450} active={+(active > 0)} />
      <ColorDiv color="rgb(229, 9, 20)" width={425} active={+(active > 1)} />
      <ColorDiv color="white" width={400} active={+(active > 2)}>
        <Content setActive={setActive} />
      </ColorDiv>
    </Body>
  );
}
const Content = ({ setActive }) => {
  const pages = ["TEAMS", "LOCATIONS", "LIFE AT NETFLIX"];
  const anotherPage = [
    "NETFLIX CULTURE MEMO",
    "WORK LIFE BALANCE",
    "INCLUSION & DIVERSITY",
    "BLOG",
  ];
  const closeNav = () => {
    setActive(2);
    setTimeout(() => {
      setActive(1);
    }, 300);
    setTimeout(() => {
      setActive(0);
    }, 600);
  };
  return (
    <div style={{ position: "relative" }}>
      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-700x188.png"
        alt="logo"
        style={{ width: 150, height: 40 }}
      />
      <div>
        {pages.map((ele) => (
          <h5 key={ele}>{ele}</h5>
        ))}
        {anotherPage.map((ele) => (
          <p style={{ paddingLeft: 20 }} key={ele}>
            {ele}
          </p>
        ))}
      </div>
      <NavBtn onClick={closeNav} top={-10} right={-5}>
        <i className="fas fa-times" style={{ opacity: 0.5 }}></i>
      </NavBtn>
    </div>
  );
};

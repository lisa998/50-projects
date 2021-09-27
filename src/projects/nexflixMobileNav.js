import { styled } from "@material-ui/core";
import React from "react";
import { useState } from "react";

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
      <ColorDiv color="black" width={450} active={active > 0} />
      <ColorDiv color="rgb(229, 9, 20)" width={425} active={active > 1} />
      <ColorDiv color="white" width={400} active={active > 2}>
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
          <h5>{ele}</h5>
        ))}
        {anotherPage.map((ele) => (
          <p style={{ paddingLeft: 20 }}>{ele}</p>
        ))}
      </div>
      <NavBtn onClick={closeNav} top={-10} right={-5}>
        <i className="fas fa-times" style={{ opacity: 0.5 }}></i>
      </NavBtn>
    </div>
  );
};

const Body = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "85vh",
  fontFamily: "'Muli', sans-serif",
});
const NavBtn = styled("div")({
  padding: 5,
  position: "absolute",
  fontSize: 24,
  top: (props) => props.top,
  left: (props) => props.left,
  right: (props) => props.right,
  cursor: "pointer",
});
const Div = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});
const ColorDiv = styled("div")({
  position: "absolute",
  backgroundColor: (props) => props.color,
  width: (props) => props.width,
  height: "100%",
  left: 0,
  padding: 30,
  transform: (props) => (props.active ? "translateX(0%)" : "translateX(-100%)"),
  transition: "0.3s ease-in",
});

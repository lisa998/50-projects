import { styled } from "@material-ui/styles";
import { useState } from "react";
import React from "react";

export default function RotatingNavigation() {
  let [open, setOpen] = useState(false);
  const navs = [
    { icon: "fas fa-home", tag: "HOME", left: -30 },
    { icon: "fas fa-user-alt", tag: "ABOUT", left: -10 },
    { icon: "fas fa-envelope", tag: "CONTACT", left: 10 },
  ];
  return (
    <Body>
      <RotatedCircle setOpen={setOpen} open={open} />
      <Article open={open} />
      <NavBar>
        {navs.map((n, i) => (
          <Nav nav={n} open={open} key={i} />
        ))}
      </NavBar>
    </Body>
  );
}
const NavBar = styled("div")({
  position: "fixed",
  bottom: 100,
});
const Body = styled("div")({
  position: "relative",
  backgroundColor: "#333",
  height: "100%",
  width: "100%",
  overflow: "hidden",
  fontFamily: "'Lato', sans-serif",
});
const Circle = styled("div")({
  position: "absolute",
  borderRadius: "50%",
  height: 160,
  width: 160,
  backgroundColor: "#ff7979",
  top: -80,
  left: -80,
  color: "white",
  transform: (props) => (props.nav ? `rotate(-90deg)` : null),
  transition: "0.5s ease-in",
  zIndex: 1,
});
const Content = styled("div")({
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  padding: "50px",
  backgroundColor: "white",
  transform: (props) => (props.open ? "rotate(-20deg)" : null),
  transformOrigin: "0% 0%",
  transition: "0.5s ease-in",
  zIndex: -1,
});
const Article = ({ open }) => {
  const content = {
    title: "Amazing Article",
    author: "Florin Pop",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.",
    picUrl:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  };
  return (
    <Content open={open}>
      <div style={{ maxWidth: 1000, margin: "auto" }}>
        <h1>{content.title}</h1>
        <Italic>{content.author}</Italic>
        <p>{content.content}</p>
        <h3> My Dog </h3>
        <img
          src={content.picUrl}
          alt="dog"
          style={{ height: "100%", width: "100%" }}
        />
        <p>{content.content}</p>
      </div>
    </Content>
  );
};
const Italic = styled("span")({
  color: "gray",
  fontSize: "16px",
  top: -20,
  fontStyle: "italic",
  position: "relative",
});
const Btn = styled("div")({
  position: "relative",
  left: (props) => props.left,
  display: "flex",
  fontSize: 18,
  color: "#fff",
  margin: 40,
  alignItems: "center",
  transition: "0.7s ease-in",
});
const RotatedCircle = ({ open, setOpen }) => {
  return (
    <Circle nav={open} onClick={() => setOpen(!open)}>
      <Icon left={105} top={100}>
        <i className="fas fa-bars"></i>
      </Icon>
      <Icon left={35} top={65}>
        <i className="fas fa-times"></i>
      </Icon>
    </Circle>
  );
};
const Icon = styled("div")({
  position: "relative",
  fontSize: 24,
  left: (props) => props.left,
  top: (props) => props.top,
});
const Nav = ({ nav, open }) => {
  if (nav.tag === "HOME") {
    return (
      <Btn left={open ? nav.left : -200}>
        <div className={nav.icon} style={{ padding: "0px 10px" }}></div>
        <div>{nav.tag}</div>
      </Btn>
    );
  } else {
    return (
      <Btn left={open ? nav.left : -200}>
        <div className={nav.icon} style={{ padding: "0px 10px" }}></div>
        <div>{nav.tag}</div>
      </Btn>
    );
  }
};

import { useState } from "react";
import React from "react";
import { NavBar, Body, Circle, Content, Icon, Italic, Btn } from "./styled";

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

const RotatedCircle = ({ open, setOpen }) => {
  return (
    <Circle nav={+open} onClick={() => setOpen(!open)}>
      <Icon left={105} top={100}>
        <i className="fas fa-bars"></i>
      </Icon>
      <Icon left={35} top={65}>
        <i className="fas fa-times"></i>
      </Icon>
    </Circle>
  );
};

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

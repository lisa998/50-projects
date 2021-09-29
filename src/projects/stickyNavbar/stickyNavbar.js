import { useState } from "react";
import { Body, NavBox, StyledNav, NavFont, Img, PicFont } from "./styled";

export default function StickyNavbar() {
  const [white, setWhite] = useState(1);
  const changeStyle = (e) => {
    if (e.nativeEvent.target.scrollTop >= 180) {
      setWhite(0);
    } else {
      setWhite(1);
    }
  };
  return (
    <Body onScroll={changeStyle}>
      <Nav white={white} />
      <Pic />
      <Content />
    </Body>
  );
}
const Nav = ({ white }) => {
  return (
    <NavBox white={white}>
      <StyledNav white={white}>
        <NavFont fontSize={28} white={white}>
          My Website
        </NavFont>
        <div style={{ display: "flex" }}>
          <NavFont style={{ color: "#c0392b" }}>Home</NavFont>
          <NavFont>About</NavFont>
          <NavFont>Services</NavFont>
          <NavFont>Contact</NavFont>
        </div>
      </StyledNav>
    </NavBox>
  );
};
const Pic = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Img />
      <PicFont top={"60%"} fontSize={40} fontWeight={700}>
        Welcome To My Website
      </PicFont>
      <PicFont top={"70%"} fontSize={28}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
        consequuntur?
      </PicFont>
    </div>
  );
};
const Content = () => {
  return (
    <div
      style={{
        maxWidth: 1000,
        width: 1000,
        top: 250,
        position: "relative",
        margin: 20,
      }}
    >
      <h1>Content One</h1>
      <p style={{ color: "#555", lineHeight: 1.5 }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
        dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic
        quo in ipsum iste soluta eaque perferendis nihil recusandae dolore
        officia aperiam corporis similique. Facilis quos tempore labore totam!
        Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor,
        modi dolorem sit architecto, voluptate magni sunt unde est quas?
        Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur
        libero laboriosam ab eligendi omnis delectus earum labore, placeat
        officiis sint illum rem voluptas ipsum repellendus iste eius recusandae
        quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et
        iste dolorum obcaecati minus odio eligendi!
      </p>
      <h1>Content Two</h1>
      <p style={{ color: "#555", lineHeight: 1.5 }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        provident nostrum possimus inventore nisi laboriosam consequatur modi
        nulla eos, commodi, omnis distinctio! Maxime distinctio impedit
        provident, voluptates illo odio nostrum minima beatae similique a sint
        sapiente voluptatum atque optio illum est! Tenetur tempora doloremque
        quae iste aperiam hic cumque repellat?
      </p>
    </div>
  );
};

import { styled } from "@material-ui/styles";
import { useState } from "react";

export default function StickyNavbar() {
  const [whiteStyle, setWhiteStyle] = useState(true);
  const changeStyle = (e) => {
    if (e.nativeEvent.target.scrollTop >= 180) {
      setWhiteStyle(false);
    } else {
      setWhiteStyle(true);
    }
  };
  return (
    <Body onScroll={changeStyle}>
      <Nav whiteStyle={whiteStyle} />
      <Pic />
      <Content />
    </Body>
  );
}
const Nav = ({ whiteStyle }) => {
  return (
    <NavBox whiteStyle={whiteStyle}>
      <StyledNav whiteStyle={whiteStyle}>
        <NavFont fontSize={28} whiteStyle={whiteStyle}>
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
const Body = styled("div")({
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  height: "90vh",
  overflow: "auto",
  fontFamily: "'Open Sans', sans-serif",
});
const NavBox = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  position: "sticky",
  backgroundColor: (props) => (props.whiteStyle ? "#222222" : "white"),
  top: 0,
  zIndex: 3,
  transition: "all 0.2s ease-in-out",
});
const StyledNav = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: 1000,
  width: 1000,
  backgroundColor: (props) => (props.whiteStyle ? "#222222" : "white"),
  color: (props) => (props.whiteStyle ? "white" : "black"),
  transition: "all 0.2s ease-in-out",
});
const NavFont = styled("h3")({
  fontSize: (props) => (props.fontSize ? props.fontSize : 20),
  padding: (props) => (props.whiteStyle ? "35px 15px" : "20px 15px"),
  transition: "0.2s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    color: "#c0392b",
  },
  margin: 0,
});
const Img = styled("div")({
  backgroundImage:
    "url('https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
  width: "100%",
  height: "80vh",
  backgroundSize: "cover",
  position: "relative",
  top: 230,
  "&::before": {
    content: '""',
    position: "absolute",
    backgroundColor: "black",
    opacity: "0.5",
    width: "100%",
    height: "100%",
  },
});
const PicFont = styled("p")({
  zIndex: 2,
  color: "white",
  position: "absolute",
  top: (props) => props.top,
  fontSize: (props) => props.fontSize,
  fontWeight: (props) => props.fontWeight,
});

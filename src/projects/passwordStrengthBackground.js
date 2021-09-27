import { styled } from "@material-ui/core";
import React, { useMemo } from "react";
import { useState } from "react";

export default function PasswordStrengthBackground() {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  let pswLength = useMemo(() => psw.length, [psw]);
  return (
    <>
      <Body strength={(10 - pswLength) * 2} img={true} />
      <Body>
        <Div>
          <h1 style={{ margin: 10 }}>Image Password Strength</h1>
          <p>Change the password to see the effect</p>
          <div style={{ textAlign: "left", fontSize: 18, width: "100%" }}>
            <p>Email:</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: 10, fontSize: 18 }}
            />
          </div>
          <div style={{ textAlign: "left", fontSize: 18, width: "100%" }}>
            <p>Password:</p>
            <input
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
              type="password"
              style={{ width: "100%", padding: 10, fontSize: 18 }}
            />
          </div>
          <Btn>Submit</Btn>
        </Div>
      </Body>
    </>
  );
}
const Body = styled("div")({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  width: "85%",
  fontFamily: "monospace",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  backgroundImage: (props) =>
    props.img
      ? "url('https://www.torbayrd-vet.ca/wp-content/uploads/sites/66/2019/05/shutterstock_1011232045.jpg')"
      : null,
  filter: (props) => `blur(${props.strength}px)`,
  backgroundSize: "cover",
  zIndex: -1,
  borderRadius: 5,
});
const Div = styled("div")({
  position: "relative",
  padding: 45,
  backgroundColor: "white",
  zIndex: 2,
  textAlign: "center",
  borderRadius: 5,
});
const Btn = styled("div")({
  padding: 10,
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
  marginTop: 20,
  borderRadius: 5,
});

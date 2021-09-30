import React, { useMemo } from "react";
import { useState } from "react";
import { Body, Div, Btn } from "./styled";

export default function PasswordStrengthBackground() {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  let pswLength = useMemo(() => psw.length, [psw]);
  return (
    <>
      <Body strength={(10 - pswLength) * 2} img={1} />
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
              autoComplete="on"
            />
          </div>
          <div style={{ textAlign: "left", fontSize: 18, width: "100%" }}>
            <p>Password:</p>
            <input
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
              type="password"
              style={{ width: "100%", padding: 10, fontSize: 18 }}
              autoComplete="on"
            />
          </div>
          <Btn>Submit</Btn>
        </Div>
      </Body>
    </>
  );
}

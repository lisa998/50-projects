import React, { useRef } from "react";
import { useState } from "react";
import { Body, Div, TextDiv, Input } from "./styled";

export default function VerifyAccountUi() {
  const [value, setValue] = useState(
    new Array(6).fill({ data: "", active: false })
  );
  const inputRef = useRef([]);

  const handleChange = (e, i) => {
    if (i < 5) {
      inputRef.current[i + 1].focus();
    }
    setValue(
      value.map((ele, index) => {
        if (i === index) {
          if (inputRef.current[i].value === "") {
            return { data: "", active: false };
          } else {
            return { data: e.nativeEvent.data, active: true };
          }
        } else {
          return ele;
        }
      })
    );
  };
  return (
    <Body>
      <Div>
        <h1>Verify Your Account</h1>
        <p style={{ textAlign: "center" }}>
          We emailed you the six digit code to cool_guy@email.com Enter the code
          below to confirm your email address.
        </p>
        <div style={{ display: "flex" }}>
          {value.map((ele, i) => {
            return (
              <Input
                type="number"
                min="0"
                max="9"
                placeholder="0"
                value={value[i].data}
                onChange={(e) => handleChange(e, i)}
                ref={(el) => (inputRef.current[i] = el)}
                active={+value[i].active}
                key={i}
              />
            );
          })}
        </div>
        <TextDiv>
          This is design only. We didn't actually send you an email as we don't
          have your email, right?
        </TextDiv>
      </Div>
    </Body>
  );
}

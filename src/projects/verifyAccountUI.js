import { styled } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

export default function VerifyAccountUI() {
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
            return { data: e.nativeEvent.data, active: false };
          } else {
            return { data: e.nativeEvent.data, active: true };
          }
        } else {
          return ele;
        }
      })
    );
  };
  useEffect(() => {
    console.log(inputRef);
  });
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
                active={value[i].active}
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
const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontFamily: "'Muli', sans-serif",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
});
const Div = styled("div")({
  padding: 30,
  border: "3px solid black",
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: 680,
});
const TextDiv = styled("div")({
  backgroundColor: "#eaeaea",
  padding: 10,
  borderRadius: 10,
  margin: "30px 5px 5px",
});
const Input = styled("input")({
  width: 100,
  height: 120,
  margin: 6,
  padding: "1px 2px",
  fontSize: 75,
  textAlign: "center",
  borderRadius: 5,
  border: (props) => (props.active ? "1px solid #3498db" : "1px solid #eee"),
  boxShadow: (props) =>
    props.active ? "0 10px 10px -5px rgb(0 0 0 / 25%)" : null,
  "&::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
  },
});

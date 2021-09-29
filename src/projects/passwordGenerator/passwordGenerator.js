import React from "react";
import { useState } from "react";
import {
  Body,
  Container,
  Input,
  SettingBox,
  Btn,
  Psw,
  BtnPaste,
} from "./styled";

const randomUpperCase = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 65);

const randomLowerCase = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 97);

const randomNumber = () =>
  String.fromCharCode(Math.floor(Math.random() * 10) + 48);

const randomSymbol = () =>
  String.fromCharCode(Math.floor(Math.random() * 15) + 33);
const random = [randomUpperCase, randomLowerCase, randomNumber, randomSymbol];

export default function PasswordGenerator() {
  const [value, setValue] = useState(10);
  const [state, setState] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [psw, setPsw] = useState("");
  const choice = [
    { value: "uppercase", title: "Include uppercase letters" },
    { value: "lowercase", title: "Include lowercase letters" },
    { value: "numbers", title: "Include numbers" },
    { value: "symbols", title: "Include symbols" },
  ];

  const handleChange = (e) => {
    if (e.target.value > 20) {
      setValue(20);
    } else if (e.target.value < 5) {
      setValue("");
    } else {
      setValue(e.target.value);
    }
  };
  const setCheckBox = (e) => {
    let key = e.target.value;
    setState({ ...state, [key]: !state[key] });
  };
  const generatePsw = () => {
    let randomType = [];
    let result = "";
    Object.values(state).forEach((ele, i) => {
      if (ele) {
        randomType.push(random[i]);
      }
    });

    if (randomType[0]) {
      for (let i = 0; i < value; i++) {
        result += randomType[Math.floor(Math.random() * randomType.length)]();
      }
      setPsw(result);
    }
  };
  const Copy = () => {
    if (psw !== "") {
      navigator.clipboard.writeText(psw).then(() => {
        alert("Password copied to clipboard...");
      });
    }
  };
  return (
    <Body>
      <Container>
        <h2 style={{ textAlign: "center" }}>Password Generator</h2>
        <Psw>
          {psw}
          <BtnPaste onClick={Copy}>
            <i className="fas fa-clipboard"></i>
          </BtnPaste>
        </Psw>
        <SettingBox>
          Password Length
          <Input
            type="number"
            step="1"
            min="5"
            max="20"
            value={value}
            onChange={handleChange}
          ></Input>
        </SettingBox>
        {choice.map((ele, i) => (
          <SettingBox key={i}>
            {ele.title}
            <input
              type="checkbox"
              value={ele.value}
              checked={state[ele.value]}
              onChange={setCheckBox}
            />
          </SettingBox>
        ))}
        <Btn onClick={generatePsw}>Generate Password</Btn>
      </Container>
    </Body>
  );
}

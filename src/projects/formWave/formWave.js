import { useState } from "react";
import {
  Body,
  FormBox,
  Input,
  StyleEnterBlock,
  LoginBtn,
  StyledLabel,
  StyledSpan,
} from "./styled";

export default function FormWave() {
  return (
    <Body>
      <FormBox>
        <h1 style={{ margin: "10px 0px" }}>Please Login</h1>
        <Form />
        <div>
          <span>Don't have an account?</span>
          <a style={{ textDecoration: "none" }} href={"/form-wave"}>
            <span style={{ color: "#d9deff" }}> Register</span>
          </a>
        </div>
      </FormBox>
    </Body>
  );
}

const Form = () => {
  return (
    <form>
      <EnterBlock tag="Email" />
      <EnterBlock tag="Password" />
      <LoginBtn>Login</LoginBtn>
    </form>
  );
};
const EnterBlock = ({ tag }) => {
  const [style, setStyle] = useState([20, "white"]);
  const [value, setValue] = useState("");
  const onBlur = () => {
    if (value === "") {
      setStyle([20, "white"]);
    }
  };
  return (
    <StyleEnterBlock>
      <StyledLabel htmlFor={tag} color={style[1]}>
        {tag.split("").map((t, i) => (
          <StyledSpan translate-y={style[0]} delay={i} key={i}>
            {t}
          </StyledSpan>
        ))}
      </StyledLabel>
      <Input
        type="text"
        required
        border-color={style[1]}
        onFocus={() => setStyle([0, "#86cbff"])}
        onBlur={onBlur}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </StyleEnterBlock>
  );
};

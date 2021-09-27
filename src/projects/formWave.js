import { styled } from "@material-ui/core";
import { useState } from "react";

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
const Body = styled("div")({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  fontFamily: "'Muli', sans-serif",
});
const FormBox = styled("div")({
  display: "flex",
  alignContent: "center",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: 400,
  width: 400,
  padding: "20px 50px",
  flexDirection: "column",
  backgroundColor: "#111d61",
  color: "white",
  borderRadius: 5,
});
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
      <StyledLabel for={tag} color={style[1]}>
        {tag.split("").map((t, i) => (
          <StyledSpan translateY={style[0]} delay={i}>
            {t}
          </StyledSpan>
        ))}
      </StyledLabel>
      <Input
        type="text"
        required
        borderColor={style[1]}
        onFocus={() => setStyle([0, "#86cbff"])}
        onBlur={onBlur}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </StyleEnterBlock>
  );
};
const Input = styled("input")({
  border: 0,
  outline: "none",
  backgroundColor: " rgba(0, 0, 0, 0)",
  color: "white",
  borderBottom: (props) => `2px solid ${props.borderColor}`,
  padding: 5,
});
const StyleEnterBlock = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: 300,
  margin: "20px 0px",
});

const LoginBtn = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 50,
  width: 300,
  backgroundColor: "#d9deff",
  borderRadius: 5,
  margin: "20px 0px",
  color: "#111d61",
  cursor: "pointer",
});
const StyledLabel = styled("label")({
  color: (props) => props.color,
});
const StyledSpan = styled("span")({
  transition: "0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  display: "inline-block",
  transform: (props) => `translateY(${props.translateY}px)`,
  transitionDelay: (props) => `${props.delay * 50}ms`,
});

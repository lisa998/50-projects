import { styled } from "@material-ui/styles";
import { useState } from "react";
import React from "react";

const Body = styled("div")({
  boxSizing: "border-box",
  fontFamily: "'Muli', sans-serif",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "500px",
  overflow: "hidden",
  margin: 0,
});
const StyledSteps = styled("div")({
  boxSizing: "border-box",
  display: "flex",
  position: "relative",
  fontSize: 30,
  color: "#e0e0e0",
});
const Line = styled("div")({
  boxSizing: "border-box",
  position: "absolute",
  height: 4,
  top: 52,
  left: 45,
  zIndex: (props) => props.zindex,
  width: (props) => `${props.width}%`,
  backgroundColor: (props) => (props.bgcolor ? props.bgcolor : "#3498db"),
  transition: "0.4s ease",
});
const StyledStep = styled("div")({
  boxSizing: "border-box",
  position: "relative",
  width: "auto",
  background: "white",
  margin: 33,
  color: (props) => (props.active ? "#3498db" : "#e0e0e0"),
});
const Circle = styled("div")({
  boxSizing: "border-box",
  position: "relative",
  backgroundColor: "white",
});
const Num = styled("span")({
  boxSizing: "border-box",
  position: "absolute",
  fontSize: 22,
  color: "#999",
  right: 10,
  top: 3,
});
const Btn = styled("div")({
  boxSizing: "border-box",
  backgroundColor: (props) => (props.prevent ? "#e0e0e0" : "#3498db"),
  fontSize: 12,
  color: "white",
  width: 93,
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 30px",
  margin: 5,
  borderRadius: 5,
});
const Btns = styled("div")({
  boxSizing: "border-box",
  display: "flex",
  cursor: "pointer",
});

export default function ProgressSteps() {
  let [step, setStep] = useState(1);

  const increaseStep = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };
  const decreaseStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <>
      <Body>
        <Steps step={step} />
        <Btns>
          <Btn prevent={+(step === 1)} onClick={decreaseStep}>
            Prev
          </Btn>
          <Btn prevent={+(step === 4)} onClick={increaseStep}>
            Next
          </Btn>
        </Btns>
      </Body>
    </>
  );
}

const Steps = ({ step }) => {
  let nums = [1, 2, 3, 4];
  return (
    <StyledSteps>
      {nums.map((n, i) => (
        <Step num={n} active={+(step > i)} key={i} />
      ))}
      <Line width={(step - 1) * 25} zindex={-1}></Line>
      <Line bgcolor={"#e0e0e0"} width={75} zindex={-2}></Line>
    </StyledSteps>
  );
};

const Step = ({ num, active }) => {
  return (
    <StyledStep active={active}>
      <Circle className="far fa-circle">
        <Num>{num}</Num>
      </Circle>
    </StyledStep>
  );
};

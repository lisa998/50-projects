import { useState } from "react";
import React from "react";
import {
  Body,
  StyledSteps,
  Line,
  StyledStep,
  Circle,
  Num,
  Btn,
  Btns,
} from "./styled";

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

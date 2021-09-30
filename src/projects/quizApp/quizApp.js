import React from "react";
import { useState } from "react";
import { quizData } from "./data";
import { Body, QuizContainer, Content, Btn } from "./styled";

export default function QuizApp() {
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(0);

  return (
    <Body>
      {quizData.map((q, i) => (
        <Quiz
          q={q}
          setScore={setScore}
          display={i === page}
          setPage={setPage}
          key={i}
        />
      ))}
      <Score score={score} display={page === 4} />
    </Body>
  );
}
const Quiz = ({ q, setScore, display, setPage }) => {
  let { question, a, b, c, d, correct } = q;
  let ans = [a, b, c, d];
  let answer = q[correct];
  let [choice, setChoice] = useState("");
  const submit = () => {
    if (choice !== "") {
      setPage((page) => page + 1);
      if (answer === choice) {
        setScore((score) => score + 1);
      }
    }
  };
  return (
    <QuizContainer display={+display}>
      <Content>
        <h1 style={{ textAlign: "center" }}>{question}</h1>
        <div>
          {ans.map((a) => (
            <Ans ans={a} ques={question} setChoice={setChoice} key={a} />
          ))}
        </div>
      </Content>
      <Btn onClick={submit}>Submit</Btn>
    </QuizContainer>
  );
};
const Ans = ({ ans, ques, setChoice }) => {
  return (
    <div>
      <input
        type="radio"
        value={ans}
        id={ans}
        name={ques}
        onChange={(e) => setChoice(e.target.value)}
      />
      <label htmlFor={ans} style={{ fontSize: 24 }}>
        {ans}
      </label>
    </div>
  );
};
const Score = ({ score, display }) => {
  return (
    <QuizContainer display={+display}>
      <h1 style={{ textAlign: "center" }}>
        You answered {score}/4 questions correctly
      </h1>
      <Btn onClick={() => window.location.reload()}>Reload</Btn>
    </QuizContainer>
  );
};

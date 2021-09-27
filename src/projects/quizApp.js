import { styled } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";

export default function QuizApp() {
  const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
  ];
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log(page);
  }, [page]);
  return (
    <Body>
      {quizData.map((q, i) => (
        <Quiz
          q={q}
          setScore={setScore}
          display={i === page}
          setPage={setPage}
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
    <QuizContainer display={display}>
      <Content>
        <h1 style={{ textAlign: "center" }}>{question}</h1>
        <div>
          {ans.map((a) => (
            <Ans ans={a} ques={question} setChoice={setChoice} />
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
    <QuizContainer display={display}>
      <h1 style={{ textAlign: "center" }}>
        You answered {score}/4 questions correctly
      </h1>
      <Btn onClick={() => window.location.reload()}>Reload</Btn>
    </QuizContainer>
  );
};
const Body = styled("div")({
  position: "relative",
  display: "flex",
  width: "100%",
  height: "85vh",
  fontFamily: "'Poppins', sans-serif",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
});
const QuizContainer = styled("div")({
  display: (props) => (props.display ? "block" : "none"),
  position: "relative",
  width: 600,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  overflow: "hidden",
  boxShadow: "0 0 10px 2px rgb(100 100 100 / 10%)",
});
const Content = styled("div")({
  position: "relative",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: 72,
});
const Btn = styled("div")({
  backgroundColor: "#8e44ad",
  color: "white",
  padding: 20,
  width: "100%",
  position: "relative",
  bottom: 0,
  textAlign: "center",
  "&:hover": {
    backgroundColor: "#732d91",
  },
});

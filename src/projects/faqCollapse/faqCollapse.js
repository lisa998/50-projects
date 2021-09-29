import React from "react";
import { useState } from "react";
import { Body, Block, Btn } from "./styled";

export default function FaqCollapse() {
  let [question, setQuestion] = useState([
    {
      Q: "Why shouldn't we trust atoms?",
      A: "They make up everything.",
      open: true,
    },
    {
      Q: "What do you call someone with no body and no nose?",
      A: "Nobody knows.",
      open: false,
    },
    {
      Q: "What's the object-oriented way to become wealthy?",
      A: "Inheritance.",
      open: false,
    },
    {
      Q: "How many tickles does it take to tickle an octopus?",
      A: "Ten-tickles!",
      open: false,
    },
    { Q: "What is: 1 + 1?", A: "Depends on who are you asking.", open: false },
  ]);
  return (
    <Body>
      <h1>Frequently Asked Questions</h1>
      {question.map((q, i) => (
        <Content
          question={q}
          index={i}
          setQuestion={setQuestion}
          allQ={question}
          key={i}
        />
      ))}
    </Body>
  );
}

const Content = ({ question, index, setQuestion, allQ }) => {
  const handleOpen = () => {
    setQuestion(
      allQ.map((q, i) => {
        if (i === index) {
          return { ...q, open: !q.open };
        }
        return q;
      })
    );
  };
  return (
    <Block open={question.open}>
      <h3>{question.Q}</h3>
      {question.open ? <p>{question.A}</p> : null}
      <Btn onClick={handleOpen}>
        {question.open ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-angle-down"></i>
        )}
      </Btn>
    </Block>
  );
};

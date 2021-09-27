import { styled } from "@material-ui/core";
import React from "react";
import { useState } from "react";

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
        />
      ))}
    </Body>
  );
}

const Body = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "'Muli', sans-serif",
});
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
          <i class="fas fa-times"></i>
        ) : (
          <i class="fas fa-angle-down"></i>
        )}
      </Btn>
    </Block>
  );
};
const Block = styled("div")({
  position: "relative",
  border: "2px solid #e9e9e9",
  borderRadius: 20,
  boxShadow: "5px 5px 5px 0px rgba(143,143,143,1)",
  margin: 10,
  padding: "20px 30px",
  width: 600,
  backgroundImage:
    "url('https://thinkmarketingmagazine.com/wp-content/uploads/2020/11/2018-08-communication-builds-housekeeping-professionals-detail-1200x627-1.jpg')",
  backgroundSize: "cover",
  zIndex: 2,
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: (props) =>
      !props.open ? "#f0f0f0" : "rgb(255 255 255 / 40%)",
    zIndex: -1,
    top: 0,
    right: 0,
    borderRadius: 20,
    transition: "all 0.1s ease-in",
  },
});
const Btn = styled("div")({
  borderRadius: "50%",
  color: "white",
  backgroundColor: "#9fa4a8",
  width: 30,
  height: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 30,
  right: 30,
  zIndex: 5,
  "&:hover": {
    cursor: "pointer",
  },
});

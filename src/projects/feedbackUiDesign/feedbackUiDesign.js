import React from "react";
import { useState } from "react";
import { Body, Div, Choice, Btn } from "./styled";

export default function FeedbackUiDesign() {
  const [submited, setSubmit] = useState(false);
  const [select, setSelect] = useState(2);
  const choices = [
    {
      title: "Unhappy",
      img: "fas fa-frown",
      color: "red",
    },
    {
      title: "Neutral",
      img: "fas fa-meh-blank",
      color: "orange",
    },
    {
      title: "Satisfied",
      img: "fas fa-grin",
      color: "green",
    },
  ];

  return (
    <Body>
      <Div>
        {submited ? (
          <Result result={choices[select].title} />
        ) : (
          <Form
            choices={choices}
            select={select}
            setSelect={setSelect}
            setSubmit={setSubmit}
          />
        )}
      </Div>
    </Body>
  );
}
const Result = ({ result }) => {
  return (
    <>
      <i className="fas fa-heart" style={{ color: "red", fontSize: 30 }}></i>
      <h3>Thank You!</h3>
      <h4>Feedback: {result}</h4>
      <p>We'll use your feedback to improve our customer support</p>
    </>
  );
};
const Form = ({ choices, select, setSelect, setSubmit }) => {
  return (
    <>
      <h3>How satisfied are you with our customer support performance?</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {choices.map((ele, i) => {
          return (
            <Choice
              active={+(select === i)}
              onClick={() => setSelect(i)}
              key={i}
            >
              <i
                className={ele.img}
                style={{
                  width: 40,
                  heigth: 40,
                  fontSize: 40,
                  color: ele.color,
                }}
              ></i>
              <p>{ele.title}</p>
            </Choice>
          );
        })}
      </div>
      <Btn onClick={() => setSubmit(true)}>Send Review</Btn>
    </>
  );
};

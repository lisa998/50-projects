import { styled } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export default function FeedbackUiDesign() {
  const [submited, setSubmit] = useState(false);
  const [select, setSelect] = useState(2);
  const choices = [
    {
      title: "Unhappy",
      img: "https://image.flaticon.com/icons/svg/187/187150.svg",
    },
    {
      title: "Neutral",
      img: "https://image.flaticon.com/icons/svg/187/187136.svg",
    },
    {
      title: "Satisfied",
      img: "https://image.flaticon.com/icons/svg/187/187133.svg",
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
      <i class="fas fa-heart" style={{ color: "red", fontSize: 30 }}></i>
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
            <Choice active={select === i} onClick={() => setSelect(i)}>
              <img src={ele.img} alt="" style={{ width: 40, heigth: 40 }} />
              <p>{ele.title}</p>
            </Choice>
          );
        })}
      </div>
      <Btn onClick={() => setSubmit(true)}>Send Review</Btn>
    </>
  );
};

const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontFamily: "'Montserrat', sans-serif",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
});
const Div = styled("div")({
  width: 450,
  boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
  textAlign: "center",
  padding: 20,
});
const Choice = styled("div")({
  width: 120,
  height: 120,
  boxShadow: (props) => (props.active ? "0 0 10px rgb(0 0 0 / 10%)" : null),
  textAlign: "center",
  padding: 20,
  margin: "10px 5px 25px",
  flexShrink: 0,
  "&:hover": {
    boxShadow: "0 0 10px rgb(0 0 0 / 10%)",
  },
});
const Btn = styled("button")({
  color: "white",
  backgroundColor: "black",
  padding: "12px 30px",
  borderRadius: 5,
  border: 0,
  "&:active": {
    transform: "scale(0.98)",
  },
});

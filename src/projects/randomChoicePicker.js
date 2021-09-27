import { styled } from "@material-ui/core";
import React, { useCallback, useMemo } from "react";
import { useState } from "react";

export default function RandomChoicePicker() {
  const [content, setContent] = useState("");
  const [random, setRandom] = useState(-1);
  let option = useMemo(() => content.split(","), [content]);

  const randomChoice = useCallback(() => {
    let id = setInterval(() => {
      setRandom(Math.floor(Math.random() * option.length));
    }, 100);

    setTimeout(() => {
      clearInterval(id);
    }, 3000);
  }, [option.length]);

  const Enter = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        randomChoice();
      }
    },
    [randomChoice]
  );
  return (
    <Body>
      <h4>
        Enter all of the choices divided by a comma (','). Press enter when
        you're done
      </h4>
      <Textarea
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={Enter}
        value={content}
      ></Textarea>
      <Options>
        {option.map((op, i) =>
          op ? <Option active={random === i}>{op}</Option> : null
        )}
      </Options>
    </Body>
  );
}
const Body = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "90%",
  fontFamily: "'Muli', sans-serif",
});

const Textarea = styled("textarea")({
  width: 400,
  height: 150,
  margin: "10px  0px 30px 0px",
});
const Options = styled("div")({
  display: "flex",
});
const Option = styled("div")({
  padding: "5px 15px",
  margin: 5,
  borderRadius: 100,
  color: "white",
  backgroundColor: (props) => (props.active ? "#e42d95" : "#313f8c"),
});

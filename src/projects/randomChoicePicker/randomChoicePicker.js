import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import { Body, Textarea, Options, Option } from "./styled";

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
          op ? (
            <Option active={+(random === i)} key={i}>
              {op}
            </Option>
          ) : null
        )}
      </Options>
    </Body>
  );
}

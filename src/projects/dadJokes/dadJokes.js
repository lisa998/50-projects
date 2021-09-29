import { Button } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { Body, Content } from "./styled";

export default function DadJokes() {
  const [joke, setJoke] = useState();

  const getJoke = async () => {
    let joke = await axios.get("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    setJoke(joke.data.joke);
  };
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <Body>
      <Content>
        <h3>Don't Laugh Challenge</h3>
        <p style={{ paddingBottom: 20 }}>{joke}</p>
        <Button
          variant="contained"
          size="medium"
          style={{
            width: 210,
            color: "#3f51b5",
          }}
          onClick={() => getJoke()}
        >
          Get Another Joke
        </Button>
      </Content>
    </Body>
  );
}

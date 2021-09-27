import { styled } from "@material-ui/core";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";

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
          style={btnStyle}
          onClick={() => getJoke()}
        >
          Get Another Joke
        </Button>
      </Content>
    </Body>
  );
}

const Body = styled("div")({
  width: "100%",
  height: "80%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 40,
});
const Content = styled("div")({
  color: "white",
  display: "flex",
  flexDirection: "column",
  padding: "50px 20px",
  minHeight: 350,
  width: 760,
  textAlign: "center",
  backgroundColor: "#2d324cd9",
  alignItems: "center",
  borderRadius: 5,
  fontSize: 24,
  textShadow: "gray 0.1em 0.1em 0.2em",
  boxShadow: "5px 5px 30px 0px rgba(171,171,171,1)",
  fontFamily: "'Roboto', sans-serif",
});
const btnStyle = {
  width: 210,
  color: "#3f51b5",
};

import { styled } from "@material-ui/core";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";

export default function IncrementingCounter() {
  const container = useMemo(
    () => [
      {
        icon: "fab fa-twitter fa-3x",
        title: "Twitter Followers",
        target: 12000,
      },
      {
        icon: "fab fa-youtube fa-3x",
        title: "YouTube Subscribers",
        target: 5000,
      },
      {
        icon: "fab fa-facebook fa-3x",
        title: "Facebook Fans",
        target: 7500,
      },
    ],
    []
  );
  const [counter, setCounter] = useState([0, 0, 0]);
  useEffect(() => {
    setTimeout(() => {
      setCounter(
        counter.map((c, i) => {
          if (c < container[i].target) {
            return (c += Math.ceil(container[i].target / 200));
          }
          return container[i].target;
        })
      );
    }, 10);
  }, [counter, container]);
  return (
    <Body>
      {container.map((c, i) => {
        return (
          <Container>
            <i class={c.icon}></i>
            <div style={{ fontSize: 56 }}>{counter[i]}</div>
            <div style={{ fontSize: 20 }}>{c.title}</div>
          </Container>
        );
      })}
    </Body>
  );
}
const Body = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "85vh",
  backgroundColor: "#8e44ad",
  color: "white",
  fontFamily: "'Roboto Mono', sans-serif",
});
const Container = styled("div")({
  margin: 50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { Body, Container } from "./styled";

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
    let id = setTimeout(() => {
      setCounter((counter) =>
        counter.map((c, i) => {
          if (c < container[i].target) {
            return (c += Math.ceil(container[i].target / 200));
          }
          return container[i].target;
        })
      );
    }, 10);
    return () => clearTimeout(id);
  }, [counter, container]);
  return (
    <Body>
      {container.map((c, i) => {
        return (
          <Container key={i}>
            <i className={c.icon}></i>
            <div style={{ fontSize: 56 }}>{counter[i]}</div>
            <div style={{ fontSize: 20 }}>{c.title}</div>
          </Container>
        );
      })}
    </Body>
  );
}

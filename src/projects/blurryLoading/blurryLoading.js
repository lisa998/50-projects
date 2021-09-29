import { useEffect, useState } from "react";
import React from "react";
import { Body, Pic, H1 } from "./styled";

export default function BlurryLoading() {
  let [percent, setPercent] = useState(0);
  useEffect(() => {
    let isMount = true;
    setTimeout(() => {
      if (isMount) {
        setPercent((p) => p + 1);
      }
    }, 50);
    if (percent === 100) {
      if (isMount) {
        setPercent(100);
      }
    }
    return () => {
      isMount = false;
    };
  }, [percent]);

  return (
    <Body>
      <Pic blur={(100 - percent) * 0.3} />
      <H1 opacity={(100 - percent) / 100}>{percent}%</H1>
    </Body>
  );
}

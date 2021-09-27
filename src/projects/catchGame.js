import { styled } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";

export default function CatchGame() {
  const [page, setPage] = useState(0);
  const [select, setSelect] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [score, setScore] = useState(0);
  const animals = [
    { name: "otter", src: "/png/otter.png" },
    { name: "hedgehog", src: "/png/hedgehog.png" },
    { name: "deer", src: "/png/deer.png" },
    { name: "chipmunk", src: "/png/chipmunk.png" },
  ];
  return (
    <Body>
      <HomePage display={page === 0} setPage={setPage} />
      <ChoicePage
        animals={animals}
        display={page === 1}
        setSelect={setSelect}
        setPage={setPage}
        setStartTime={setStartTime}
        setScore={setScore}
      />
      <Game
        display={page === 2}
        startTime={startTime}
        select={`${process.env.PUBLIC_URL}/png/${select}.png`}
        score={score}
        setScore={setScore}
        setPage={setPage}
      />
      <EndPage
        display={page === 3}
        setPage={setPage}
        score={score}
        select={select}
      />
    </Body>
  );
}
const HomePage = ({ display, setPage }) => {
  return (
    <div
      style={{
        display: display ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Catch the Animal!</h1>
      <Box style={{ width: 250, height: 70 }} onClick={() => setPage(1)}>
        Play Game
      </Box>
    </div>
  );
};
const ChoicePage = ({
  animals,
  display,
  setSelect,
  setPage,
  setStartTime,
  setScore,
}) => {
  return (
    <div style={{ display: display ? "block" : "none" }}>
      <h1>Select your favorite animal!</h1>
      <div style={{ display: "flex" }}>
        {animals.map((ele) => (
          <AnimalBox
            src={process.env.PUBLIC_URL + ele.src}
            name={ele.name}
            setSelect={setSelect}
            setPage={setPage}
            setStartTime={setStartTime}
            setScore={setScore}
          />
        ))}
      </div>
    </div>
  );
};
const AnimalBox = ({
  src,
  name,
  setSelect,
  setPage,
  setStartTime,
  setScore,
}) => {
  const setAnimal = (name) => {
    setSelect(name);
    setPage(2);
    setScore(0);
    setStartTime(Date.now());
  };
  return (
    <Box onClick={() => setAnimal(name)}>
      <h3 style={{ position: "absolute", top: 0 }}>{name}</h3>
      <Img src={src} alt={name} />
    </Box>
  );
};
const Game = ({ display, startTime, select, score, setScore, setPage }) => {
  const [time, setTime] = useState(0);
  const [target, setTarget] = useState([
    { reverse: Math.floor(Math.random() * 2), id: 0 },
  ]);

  const handleClick = (id) => {
    setTarget((target) => target.filter((ele) => ele.id !== id));
    setScore((score) => score + 1);
  };
  useEffect(() => {
    let id = setInterval(() => {
      setTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(id);
  }, [startTime]);
  useEffect(() => {
    let timeid = setTimeout(() => {
      let id = 0;
      if (target[target.length - 1]) {
        id = target[target.length - 1].id + 1;
      }
      setTarget((target) => [
        ...target,
        { reverse: Math.floor(Math.random() * 2), id },
      ]);
    }, 1000);
    return () => clearInterval(timeid);
  }, [target]);
  useEffect(() => {
    if (time === 10) {
      setPage(3);
    }
  }, [time, setPage]);
  return (
    <div style={{ display: display ? "block" : "none" }}>
      <H5 left={30}>
        Time:
        {Math.floor(time / 60)
          .toString()
          .padStart(2, "0")}
        :{(time % 60).toString().padStart(2, "0")}
      </H5>
      <H5 right={30}>Score:{score}</H5>
      {target.map((ele) => (
        <Img
          key={ele.id}
          src={select}
          alt=""
          bottom={20}
          reverse={ele.reverse}
          onClick={() => handleClick(ele.id)}
        />
      ))}
    </div>
  );
};
const EndPage = ({ display, setPage, score, select }) => {
  return (
    <div
      style={{
        display: display ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>
        You Catch {score} {select}!
      </h1>
      <Box style={{ width: 250, height: 70 }} onClick={() => setPage(1)}>
        RESTART
      </Box>
    </div>
  );
};

const Body = styled("div")({
  position: "relative",
  display: "flex",
  width: "100%",
  height: "60vh",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: " #f5f5f5",
  color: "#543a31",
  fontFamily: "'Press Start 2P', sans-serif",
  flexDirection: "column",
  overflow: "hidden",
});
const Img = styled("img")({
  width: 100,
  objectFit: "cover",
  marginTop: 30,
  bottom: (props) => props.bottom,
  left: (props) => (props.reverse ? "101%" : null),
  right: (props) => (props.reverse ? null : "101%"),
  position: (props) => (props.bottom ? "absolute" : null),
  transform: (props) => (props.reverse ? "scaleX(-1)" : null),
  animation: (props) =>
    props.reverse ? "move 5s linear" : "reverseMove 5s linear",
});
const Box = styled("div")({
  width: 200,
  height: 220,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #d4a34f",
  margin: 10,
  transition: "0.1s ease-in",
  position: "relative",
  color: "#d4a34f",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#d4a34f",
    color: "white",
  },
});
const H5 = styled("h5")({
  position: "absolute",
  top: 0,
  left: (props) => props.left,
  right: (props) => props.right,
});

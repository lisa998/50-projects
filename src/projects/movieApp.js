import { styled } from "@material-ui/styles";
import { useState, useMemo, useEffect, useCallback } from "react";
import React from "react";
import axios from "axios";

export default function MovieApp() {
  const [info, setInfo] = useState([]);
  const [value, setValue] = useState("");
  const URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

  const getData = useCallback(async (url) => {
    let result = await axios.get(url);
    result = result.data.results;
    result.forEach((r) => {
      const { title, poster_path, vote_average, overview } = r;
      console.log(r);
      setInfo((info) => [
        ...info,
        {
          pic: IMG_PATH + poster_path,
          title: title,
          score: vote_average,
          overview: overview,
        },
      ]);
    });
  }, []);
  useEffect(() => {
    getData(URL);
  }, [getData]);
  const Submit = (e) => {
    if (e.keyCode === 13) {
      setInfo([]);
      const stream = SEARCH_API + value;
      getData(stream);
      setValue("");
    }
  };
  return (
    <>
      <Nav>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          onKeyDown={Submit}
        />
      </Nav>
      <Body>
        {info.map((i) => (
          <MovieContainer info={i} />
        ))}
      </Body>
    </>
  );
}
const MovieContainer = ({ info }) => {
  const [active, setActive] = useState(false);
  const color = useMemo(() => {
    if (info.score >= 8) {
      return "#90ee90";
    } else if (info.score >= 5) {
      return "#ffa500";
    } else {
      return "red";
    }
  }, [info.score]);
  return (
    <Movie
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Img src={info.pic} alt={info.title} />
      <Info>
        <h3>{info.title}</h3>
        <Score color={color}>{info.score}</Score>
      </Info>
      <Overview active={active}>
        <h2>Overview</h2>
        <p>{info.overview}</p>
      </Overview>
    </Movie>
  );
};

const Body = styled("div")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  fontFamily: "'Poppins', sans-serif",
  position: "relative",
  backgroundColor: "#22254b",
  color: "white",
  fontSize: 20,
});
const Nav = styled("div")({
  backgroundColor: "#373b69",
  display: "flex",
  justifyContent: "flex-end",
});
const Input = styled("input")({
  outline: "none",
  backgroundColor: "#373b69",
  borderRadius: 50,
  margin: 20,
  color: "white",
  padding: "10px 15px",
  border: "2px solid #22254b",
  "&:focus": {
    backgroundColor: "#22254b",
  },
  "&::placeholder": {
    color: "#5e62b3",
  },
});
const Movie = styled("div")({
  width: 300,
  maxHeight: 560,
  minHeight: 80,
  margin: 18,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#373b69",
  boxShadow: "0 4px 5px rgb(0 0 0 / 20%)",
  borderRadius: 5,
  overflow: "hidden",
});
const Img = styled("img")({
  width: "100%",
  height: 450,
});
const Info = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "9px 18px 18px",
});
const Score = styled("div")({
  minWidth: 30,
  height: 36,
  position: "relative",
  backgroundColor: "#22254b",
  borderRadius: 5,
  color: (props) => props.color,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2px 7px",
});

const Overview = styled("div")({
  position: "absolute",
  backgroundColor: "white",
  bottom: 0,
  color: "black",
  padding: "1.5rem",
  fontSize: 18,
  zIndex: 2,
  transform: (props) => (props.active ? "translateY(0%)" : "translateY(101%)"),
  transition: "0.2s ease-in",
});

import { useState, useMemo, useEffect, useCallback } from "react";
import React from "react";
import axios from "axios";
import { Body, Nav, Input, Movie, Img, Info, Score, Overview } from "./styled";

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
        {info.map((i, index) => (
          <MovieContainer info={i} key={index} />
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
      <Overview active={+active}>
        <h2>Overview</h2>
        <p>{info.overview}</p>
      </Overview>
    </Movie>
  );
};

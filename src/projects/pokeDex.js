import { styled } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function PokeDex() {
  const [pokemon, setPokemon] = useState([]);
  const getPoke = useCallback(async () => {
    for (let i = 1; i < 73; i++) {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
      console.log(result.data);
      let { name, id, types, sprites } = result.data;
      setPokemon((pokemon) => [
        ...pokemon,
        {
          name,
          id,
          type: types[0].type.name,
          img: sprites["front_default"],
        },
      ]);
    }
  }, []);
  useEffect(() => {
    if (pokemon.length < 1) {
      getPoke();
    }
  }, [getPoke, pokemon.length]);
  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  };
  return (
    <Body>
      <h1>Pokedex</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: 1200,
        }}
      >
        {pokemon.map((ele, i) => (
          <Card pokemon={ele} color={colors[ele.type]} />
        ))}
      </div>
    </Body>
  );
}

const Card = ({ pokemon, color }) => {
  return (
    <Div color={color}>
      <Pic img={pokemon.img} />
      <IdContainer>#{pokemon.id.toString().padStart(3, "0")}</IdContainer>
      <h2 style={{ margin: 5 }}>{pokemon.name}</h2>
      <p style={{ margin: 5 }}>Type:{pokemon.type}</p>
    </Div>
  );
};
const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontFamily: "'Lato', sans-serif",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(to right, #d4d3dd, #efefbb)",
  minHeight: "80vh",
});
const Div = styled("div")({
  width: 160,
  height: 270,
  padding: 20,
  margin: 10,
  backgroundColor: (props) => props.color,
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const Pic = styled("div")({
  width: 120,
  height: 120,
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  backgroundImage: (props) => `url('${props.img}')`,
  backgroundSize: "cover",
});
const IdContainer = styled("div")({
  padding: "5px 10px",
  borderRadius: 10,
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  marginTop: 10,
});

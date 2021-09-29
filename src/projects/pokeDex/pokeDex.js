import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Body, Div, Pic, IdContainer } from "./styled";

export default function PokeDex() {
  const [pokemon, setPokemon] = useState([]);
  const getPoke = useCallback(async () => {
    for (let i = 1; i < 73; i++) {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
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
          <Card pokemon={ele} color={colors[ele.type]} key={i} />
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

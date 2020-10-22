import reactDOM from "react-dom";
import React, { Component } from "react";
import Pokemon from "./Pokemon";
import { pokemons } from "../models/Pokemons";

const Pokedex = (props) => {
  return (
    <div className="container-not">
      {pokemons.map((pokemon) => {
        return (
          <Pokemon
            name={pokemon.name}
            image={pokemon.image}
            type={pokemon.type}
          ></Pokemon>
        );
      })}
    </div>
  );
};

export default Pokedex;

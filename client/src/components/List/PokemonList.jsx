import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Pokemons from "./Pokemons";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getList(`/api/pokemon`);
  }, []);

  const getList = async (url) => {
    try {
      const response = await axios.get(url);
      setPokemons(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="bg-pokedex"></div>
      <div class="bg-pokedex bg2-pokedex"></div>
      <div class="bg-pokedex bg3-pokedex"></div>
      
      <div className="pokedex-container">
        <div className="title-pokedex">
          <h2>Choose your Pokemon</h2>
        </div>
        <div className="pokemons-card">
          {pokemons.map((element) => {
            return <Pokemons key={element.id} pokemon={element} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PokemonList;

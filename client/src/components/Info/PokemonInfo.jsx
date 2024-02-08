import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GoBack from "../GoBack";

const PokemonInfo = () => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const { id, info } = useParams();

  useEffect(() => {
    getInfo(`http://localhost:3000/pokemon/${id}/${info}`);
  }, []);

  const getInfo = async (url) => {
    try {
      const response = await axios.get(url);
      setPokemonInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <GoBack />
      <div>Pokemon Info</div>
      {pokemonInfo[0]}
    </>
  );
};

export default PokemonInfo;

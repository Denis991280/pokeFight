import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Pokemons.css";

//IMPORTING ALL IMAGES FOR LATER USE
import Bug from "../src/assets/type_icons/Bug.png";
import Dark from "../src/assets/type_icons/Dark.png";
import Dragon from "../src/assets/type_icons/Dragon.png";
import Electric from "../src/assets/type_icons/Electric.png";
import Fairy from "../src/assets/type_icons/Fairy.png";
import Fighting from "../src/assets/type_icons/Fighting.png";
import Fire from "../src/assets/type_icons/Fire.png";
import Flying from "../src/assets/type_icons/Flying.png";
import Ghost from "../src/assets/type_icons/Ghost.png";
import Grass from "../src/assets/type_icons/Grass.png";
import Ground from "../src/assets/type_icons/Ground.png";
import Ice from "../src/assets/type_icons/Ice.png";
import Normal from "../src/assets/type_icons/Normal.png";
import Poison from "../src/assets/type_icons/Poison.png";
import Psychic from "../src/assets/type_icons/Psychic.png";
import Rock from "../src/assets/type_icons/Rock.png";
import Steel from "../src/assets/type_icons/Steel.png";
import Water from "../src/assets/type_icons/Water.png";

export default function Pokemons({ pokemon }) {
  const [images, setimages] = useState([]);

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
  }, []);

  const getData = async (url) => {
    try {
      const response = await axios.get(url);
      setimages(response.data.sprites.other["official-artwork"].front_default);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: "none" }}>
        <div className="container">
          {!images ? (
            <p>Loading...</p>
          ) : (
            <div
              className="card"
              style={{
                backgroundImage: `url(../src/assets/background-pokemon/${pokemon.type[0]}.png)`,
              }}
            >
              <div className="card-container">
                <div className="pokename">
                  <h3>{pokemon.name.english}</h3>
                  <div className="hp">
                    <h2 id="hp-value">Hp</h2>
                    <h2 id="hp-number">{pokemon.base.HP}</h2>
                    {pokemon.type[0] && (
                      <img
                        className="icon"
                        src={`${pokemon.type[0]}`}
                        alt={`Icon for pokemon type`}
                      />
                    )}

                    {pokemon.type[1] && (
                      <img
                        className="icon"
                        src={`../src/assets/type_icons/${pokemon.type[1]}.png`}
                        alt={`Icon for pokemon type`}
                      />
                    )}
                  </div>
                </div>
                <div
                  className="img-background"
                  style={{
                    backgroundImage: `url(../src/assets/icon-background/${pokemon.type[0]}.png)`,
                  }}
                >
                  <img src={images} className="pokemon-image" />
                </div>
                <div className="short-desc">
                  <p>
                    Are you ready to face the challenges, overcome rivals, and
                    become a Pokémon Master? The adventure awaits!
                  </p>
                </div>
                <div className="types">
                  {pokemon.type[0] && <span>{pokemon.type[0]}</span>}
                  {pokemon.type[1] && <span>{pokemon.type[1]}</span>}
                </div>
              </div>
            </div>
          )}
        </div>
      </Link>
    </>
  );
}

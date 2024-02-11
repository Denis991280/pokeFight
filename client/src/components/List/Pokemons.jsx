import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Pokemons.css";

//IMPORTING ALL IMAGES FOR LATER USE
import Bug from "../../assets/type_icons/Bug.png";
import Dark from "../../assets/type_icons/Dark.png";
import Dragon from "../../assets/type_icons/Dragon.png";
import Electric from "../../assets/type_icons/Electric.png";
import Fairy from "../../assets/type_icons/Fairy.png";
import Fighting from "../../assets/type_icons/Fighting.png";
import Fire from "../../assets/type_icons/Fire.png";
import Flying from "../../assets/type_icons/Flying.png";
import Ghost from "../../assets/type_icons/Ghost.png";
import Grass from "../../assets/type_icons/Grass.png";
import Ground from "../../assets/type_icons/Ground.png";
import Ice from "../../assets/type_icons/Ice.png";
import Normal from "../../assets/type_icons/Normal.png";
import Poison from "../../assets/type_icons/Poison.png";
import Psychic from "../../assets/type_icons/Psychic.png";
import Rock from "../../assets/type_icons/Rock.png";
import Steel from "../../assets/type_icons/Steel.png";
import Water from "../../assets/type_icons/Water.png";

import BugBackground from "../../assets/background-pokemon/Bug.png";
import DarkBackground from "../../assets/background-pokemon/Dark.png";
import DragonBackground from "../../assets/background-pokemon/Dragon.png";
import ElectricBackground from "../../assets/background-pokemon/Electric.png";
import FairyBackground from "../../assets/background-pokemon/Fairy.png";
import FightingBackground from "../../assets/background-pokemon/Fighting.png";
import FireBackground from "../../assets/background-pokemon/Fire.png";
import FlyingBackground from "../../assets/background-pokemon/Flying.png";
import GhostBackground from "../../assets/background-pokemon/Ghost.png";
import GrassBackground from "../../assets/background-pokemon/Grass.png";
import GroundBackground from "../../assets/background-pokemon/Ground.png";
import IceBackground from "../../assets/background-pokemon/Ice.png";
import NormalBackground from "../../assets/background-pokemon/Normal.png";
import PoisonBackground from "../../assets/background-pokemon/Poison.png";
import PsychicBackground from "../../assets/background-pokemon/Psychic.png";
import RockBackground from "../../assets/background-pokemon/Rock.png";
import SteelBackground from "../../assets/background-pokemon/Steel.png";
import WaterBackground from "../../assets/background-pokemon/Water.png";

import BugIcon from "../../assets/icon-background/Bug.png";
import DarkIcon from "../../assets/icon-background/Dark.png";
import DragonIcon  from "../../assets/icon-background/Dragon.png";
import ElectricIcon  from "../../assets/icon-background/Electric.png";
import FairyIcon  from "../../assets/icon-background/Fairy.png";
import FightingIcon  from "../../assets/icon-background/Fighting.png";
import FireIcon  from "../../assets/icon-background/Fire.png";
import FlyingIcon  from "../../assets/icon-background/Flying.png";
import GhostIcon  from "../../assets/icon-background/Ghost.png";
import GrassIcon  from "../../assets/icon-background/Grass.png";
import GroundIcon  from "../../assets/icon-background/Ground.png";
import IceIcon  from "../../assets/icon-background/Ice.png";
import NormalIcon  from "../../assets/icon-background/Normal.png";
import PoisonIcon  from "../../assets/icon-background/Poison.png";
import PsychicIcon  from "../../assets/icon-background/Psychic.png";
import RockIcon  from "../../assets/icon-background/Rock.png";
import SteelIcon  from "../../assets/icon-background/Steel.png";
import WaterIcon  from "../../assets/icon-background/Water.png";

export default function Pokemons({ pokemon }) {
  const [images, setimages] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [backgroundIcon, setBackgroundIcon] = useState("");

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
    setBackgroundImage(getBackgroundImage(pokemon.type[0]));
    setBackgroundIcon(getBackgroundIcon(pokemon.type[0]));
    
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

  function getTypeImage(type) {
    switch (type) {
      case "Bug":
        return Bug;
      case "Dark":
        return Dark;
      case "Dragon":
        return Dragon;
      case "Electric":
        return Electric;
      case "Fairy":
        return Fairy;
      case "Fighting":
        return Fighting;
      case "Fire":
        return Fire;
      case "Flying":
        return Flying;
      case "Ghost":
        return Ghost;
      case "Grass":
        return Grass;
      case "Ground":
        return Ground;
      case "Ice":
        return Ice;
      case "Normal":
        return Normal;
      case "Poison":
        return Poison;
      case "Psychic":
        return Psychic;
      case "Rock":
        return Rock;
      case "Steel":
        return Steel;
      case "Water":
        return Water;
      default:
        return null;
    }
  }

  const getBackgroundImage = (type) => {
    switch (type) {
      case "Bug":
        return BugIcon;
      case "Dark":
        return DarkIcon;
      case "Dragon":
        return DragonIcon;
      case "Electric":
        return ElectricIcon;
      case "Fairy":
        return FairyIcon;
      case "Fighting":
        return FightingIcon;
      case "Fire":
        return FireIcon;
      case "Flying":
        return FlyingIcon;
      case "Ghost":
        return GhostIcon;
      case "Grass":
        return GrassIcon;
      case "Ground":
        return GroundIcon;
      case "Ice":
        return IceIcon;
      case "Normal":
        return NormalIcon;
      case "Poison":
        return PoisonIcon;
      case "Psychic":
        return PsychicIcon;
      case "Rock":
        return RockIcon;
      case "Steel":
        return SteelIcon;
      case "Water":
        return WaterIcon;
      default:
        return null;
    }
  };
  
  const getBackgroundIcon = (type) => {
    switch (type) {
      case "Bug":
        return BugBackground;
      case "Dark":
        return DarkBackground;
      case "Dragon":
        return DragonBackground;
      case "Electric":
        return ElectricBackground;
      case "Fairy":
        return FairyBackground;
      case "Fighting":
        return FightingBackground;
      case "Fire":
        return FireBackground;
      case "Flying":
        return FlyingBackground;
      case "Ghost":
        return GhostBackground;
      case "Grass":
        return GrassBackground;
      case "Ground":
        return GroundBackground;
      case "Ice":
        return IceBackground;
      case "Normal":
        return NormalBackground;
      case "Poison":
        return PoisonBackground;
      case "Psychic":
        return PsychicBackground;
      case "Rock":
        return RockBackground;
      case "Steel":
        return SteelBackground;
      case "Water":
        return WaterBackground;
      default:
        return null;
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
                backgroundImage: `url(${backgroundIcon})`,
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
                        src={getTypeImage(pokemon.type[0])}
                        alt={`Icon for pokemon type`}
                      />
                    )}

                    {pokemon.type[1] && (
                      <img
                        className="icon"
                        src={getTypeImage(pokemon.type[1])}
                        alt={`Icon for pokemon type`}
                      />
                    )}
                  </div>
                </div>
                <div
                  className="img-background"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
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

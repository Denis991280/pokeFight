import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./pokemonSingle.css";
import "../List/Pokemons.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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

const PokemonSingle = () => {
  const [imgChosen, setImgChosen] = useState("imgChosenOff");
  const [imgOpponent, setImgOpponent] = useState("imgOpponentOff");
  const [pokemon, setPokemon] = useState(null);
  const [images, setimages] = useState(null);
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [fightContainer, setFightContainer] = useState("disabled");
  const [roundNum, setRoundNum] = useState(0);
  const [roundNumSecond, setRoundNumSecond] = useState(0);
  const [roundContainer, setRoundContainer] = useState(
    "roundContainerDisabled"
  );
  const [roundContainerSecond, setRoundContainerSecond] = useState(
    "roundContainerDisabledSecond"
  );
  const [spStyle, setSpStyle] = useState("spBtnStyleDisabled");
  const [fightBtn, setFightBtn] = useState("CHOOSE YOUR ATTACK");
  const [defeated, setDefeated] = useState("defeatedMessageDisabled");
  const [defeatedSecond, setDefeatedSecond] = useState(
    "defeatedMessageDisabled"
  );
  const [cd, setCD] = useState(0);
  const [spBtn, setSpBtn] = useState(false);
  const [msgBtn, setMsgBtn] = useState(true);
  const [spAtkCD, setSpAtkCD] = useState("spBtnCdDisabled");
  const [movesBtn, setMovesBtn] = useState("movesBtnDisabled");
  const [messageBtn, setMessageBtn] = useState("messageBtnDisabled");
  const [nameContainer, setNameContainer] = useState("nameContainer");
  const [nameContainerPokemon, setNameContainerPokemon] = useState(
    "nameContainerPokemon"
  );
  const [buttonsContainer, setButtonsContainer] = useState("buttonsContainer");
  const [atkType, setAtkType] = useState("");
  const [player, setPlayer] = useState("");
  const [cdSpan, setCdSpan] = useState("cdSpanDisabled");
  const { id } = useParams();
  const navigate = useNavigate();

  const [toggleSinglePokemon, setToggleSinglePokemon] = useState(
    "displaySinglePokemon"
  );
  const [dmg, setDmg] = useState(0);
  const [opponentDmg, setOpponentDmg] = useState(0);
  const [result, setResult] = useState("won");
  const [barColor, setBarColor] = useState("#659cef");
  const [barColorOpponent, setBarColorOpponent] = useState("#659cef");
  const [chosenPokemonStats, setChosenPokemonStats] = useState([
    { hp: 0 },
    { atk: 0 },
    { def: 0 },
    { spAtk: 0 },
    { spDef: 0 },
    { spd: 0 },
    { name: "" },
  ]);

  const [opponentPokemonStats, setOpponentPokemonStats] = useState([
    { hp: 0 },
    { atk: 0 },
    { def: 0 },
    { spAtk: 0 },
    { spDef: 0 },
    { spd: 0 },
  ]);


  const randomNum = Math.floor(Math.random() * 809);

  useEffect(() => {
    getPokemon(`/api/pokemon/${id}`);
    getImage(`https://pokeapi.co/api/v2/pokemon/${id}`);
    getOpponent(`https://pokeapi.co/api/v2/pokemon/${randomNum}`); //change id to random number
  }, []);

  const getImage = async (url) => {
    try {
      const response = await axios.get(url);
      setimages(response.data.sprites.other["official-artwork"].front_default);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function getTypeImage(type) {
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
  }

  const handlePlayer = (e) => {
    setPlayer(e.target.value);
    console.log(e.target.value);
  };

  const getPokemon = async (url) => {
    try {
      const response = await axios.get(url);
      setPokemon([response.data]);
      console.log(response.data)
      setChosenPokemonStats({
        hp: response.data.base.HP,
        atk: response.data.base.Attack,
        def: response.data.base.Defense,
        spAtk: response.data.base["Sp. Attack"],
        spDef: response.data.base["Sp. Defense"],
        spd: response.data.base.Speed,
        name: response.data.name.english,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response || error);
    }
  };

  const getOpponent = async (url) => {
    try {
      const response = await axios.get(url);
      setRandomPokemon(response.data);

      console.log(response.data);

      setOpponentPokemonStats({
        hp: response.data.stats[0].base_stat,
        atk: response.data.stats[1].base_stat,
        def: response.data.stats[2].base_stat,
        spAtk: response.data.stats[3].base_stat,
        spDef: response.data.stats[4].base_stat,
        spd: response.data.stats[5].base_stat,
        name: response.data.name,
      });
      // console.log(response.data);
    } catch (error) {
      console.log(error.response || error);
    }
  };

  const handleChoise = () => {
    setFightContainer("active");
    setToggleSinglePokemon("disableSinglePokemon");
    setMovesBtn("movesBtnActive");
    setMessageBtn("messageBtnActive");
    setButtonsContainer("buttonsContainerDisabled");
    setNameContainerPokemon("nameContainerPokemonDisabled");
    setSpStyle("spBtnStyle");
  };

  const handleNormalAtk = () => {
    if (chosenPokemonStats.spd >= opponentPokemonStats.spd) {
      if (opponentPokemonStats.hp <= 0 || chosenPokemonStats.hp <= 0) {
        return;
      } else {
        setAtkType("normal");
        setTimeout(() => {
          setRoundNum(roundNum + 1);
          setRoundContainer("roundContainerActive");
          let atkDifference = chosenPokemonStats.atk - opponentPokemonStats.def;
          let damageMultiplier = 0;
          let randomDecimal = Math.random();
          let baseDmg = Math.floor(randomDecimal * 6) + 5;

          if (atkDifference <= 0) {
            damageMultiplier = 0.8;
          } else if (atkDifference <= 15) {
            damageMultiplier = 1.5;
          } else if (atkDifference <= 30) {
            damageMultiplier = 2;
          } else if (atkDifference <= 45) {
            damageMultiplier = 2.5;
          } else {
            damageMultiplier = 3;
          }
          const damage = Math.floor(baseDmg * damageMultiplier);
          const updatedHpOpponent = opponentPokemonStats.hp - damage;
          setDmg(damage);

          setOpponentPokemonStats({
            ...opponentPokemonStats,
            hp: updatedHpOpponent,
          });
          if (updatedHpOpponent <= 0) {
            setDefeated("defeatedMessageActive");
            setFightBtn("YOU WON! PLAY AGAIN");
            setMsgBtn(false);
            setOpponentPokemonStats({ hp: 0 });
          } else if (updatedHpOpponent <= 25) {
            setBarColorOpponent("#f13a3a");
          } else if (updatedHpOpponent <= 50) {
            setBarColorOpponent("#efe665");
          }
          setImgOpponent("imgOpponent");
        }, 1500);

        setTimeout(() => {
          setImgOpponent("imgOpponentOff");
        }, 2000);

        setTimeout(() => {
          setRoundNumSecond(roundNumSecond + 1);
          setRoundContainerSecond("roundContainerActiveSecond");
          let atkDifferenceOpponent =
            opponentPokemonStats.atk - chosenPokemonStats.def;
          let damageMulitplierOpponent = 0;
          let randomDecimalOpponent = Math.random();
          let baseDmgOpponent = Math.floor(randomDecimalOpponent * 6) + 5;

          if (atkDifferenceOpponent <= 0) {
            damageMulitplierOpponent = 0.8;
          } else if (atkDifferenceOpponent <= 15) {
            damageMulitplierOpponent = 1.5;
          } else if (atkDifferenceOpponent <= 30) {
            damageMulitplierOpponent = 2;
          } else if (atkDifferenceOpponent <= 45) {
            damageMulitplierOpponent = 2.5;
          } else {
            damageMulitplierOpponent = 3;
          }

          const opponentDmg = Math.floor(
            baseDmgOpponent * damageMulitplierOpponent
          );
          const updatedHpChosen = chosenPokemonStats.hp - opponentDmg;
          setOpponentDmg(opponentDmg);
          setChosenPokemonStats({ ...chosenPokemonStats, hp: updatedHpChosen });
          if (updatedHpChosen <= 0) {
            setDefeatedSecond("defeatedMessageActive");
            setFightBtn("YOU LOST! PLAY AGAIN");
            setMsgBtn(false);
            setResult("lost");
            setChosenPokemonStats({ hp: 0 });
          } else if (updatedHpChosen <= 25) {
            setBarColor("#f13a3a");
          } else if (updatedHpChosen <= 50) {
            setBarColor("#efe665");
          }
          setImgChosen("imgChosen");
        }, 3000);
        setTimeout(() => {
          setImgChosen("imgChosenOff");
        }, 3500);
      }
      if (cd > 1) {
        setCD(cd - 1);
      } else if (cd === 1) {
        setSpBtn(false);
        setSpAtkCD("spBtnCdDisabled");
        setSpStyle("spBtnStyle")
      }
      setFightBtn("KEEP FIGHTING");
    } else {
      if (opponentPokemonStats.hp <= 0 || chosenPokemonStats.hp <= 0) {
        return;
      } else {
        setAtkType("normal");
        setTimeout(() => {
          setRoundNumSecond(roundNumSecond + 1);
          setRoundContainerSecond("roundContainerActiveSecond");
          let atkDifferenceOpponent =
            opponentPokemonStats.atk - chosenPokemonStats.def;
          let damageMulitplierOpponent = 0;
          let randomDecimalOpponent = Math.random();
          let baseDmgOpponent = Math.floor(randomDecimalOpponent * 6) + 5;

          if (atkDifferenceOpponent <= 0) {
            damageMulitplierOpponent = 0.8;
          } else if (atkDifferenceOpponent <= 15) {
            damageMulitplierOpponent = 1.5;
          } else if (atkDifferenceOpponent <= 30) {
            damageMulitplierOpponent = 2;
          } else if (atkDifferenceOpponent <= 45) {
            damageMulitplierOpponent = 2.5;
          } else {
            damageMulitplierOpponent = 3;
          }

          const opponentDmg = Math.floor(
            baseDmgOpponent * damageMulitplierOpponent
          );
          const updatedHpChosen = chosenPokemonStats.hp - opponentDmg;
          setOpponentDmg(opponentDmg);
          setChosenPokemonStats({ ...chosenPokemonStats, hp: updatedHpChosen });
          if (updatedHpChosen <= 0) {
            setDefeatedSecond("defeatedMessageActive");
            setFightBtn("YOU LOST! PLAY AGAIN!");
            setMsgBtn(false);
            setResult("lost");
            setChosenPokemonStats({ hp: 0 });
          } else if (updatedHpChosen <= 25) {
            setBarColor("#f13a3a");
          } else if (updatedHpChosen <= 50) {
            setBarColor("#efe665");
          }
          setImgChosen("imgChosen");
        }, 1500);

        setTimeout(() => {
          setImgChosen("imgChosenOff");
        }, 2000);

        setTimeout(() => {
          setRoundNum(roundNum + 1);
          setRoundContainer("roundContainerActive");
          let atkDifference = chosenPokemonStats.atk - opponentPokemonStats.def;
          let damageMulitplier = 0;
          let randomDecimal = Math.random();
          let baseDmg = Math.floor(randomDecimal * 6) + 5;

          if (atkDifference <= 0) {
            damageMulitplier = 0.8;
          } else if (atkDifference <= 15) {
            damageMulitplier = 1.5;
          } else if (atkDifference <= 30) {
            damageMulitplier = 2;
          } else if (atkDifference <= 45) {
            damageMulitplier = 2.5;
          } else {
            damageMulitplier = 3;
          }

          const damage = Math.floor(baseDmg * damageMulitplier);
          const updatedHpOpponent = opponentPokemonStats.hp - damage;
          setDmg(damage);
          setOpponentPokemonStats({
            ...opponentPokemonStats,
            hp: updatedHpOpponent,
          });
          if (updatedHpOpponent <= 0) {
            setDefeated("defeatedMessageActive");
            setFightBtn("YOU WON! PLAY AGAIN");
            setMsgBtn(false);
            setOpponentPokemonStats({ hp: 0 });
          } else if (updatedHpOpponent <= 25) {
            setBarColorOpponent("#f13a3a");
          } else if (updatedHpOpponent <= 50) {
            setBarColorOpponent("#efe665");
          }
          setImgOpponent("imgOpponent");
        }, 3000);

        setTimeout(() => {
          setImgOpponent("imgOpponentOff");
        }, 3500);
      }
    }
    if (cd > 1) {
      setCD(cd - 1);
    } else if (cd === 1) {
      setSpBtn(false);
      setSpAtkCD("spBtnCdDisabled");
      setSpStyle("spBtnStyle")
    }
    setFightBtn("KEEP FIGHTING");
  };

  const handleSpAtk = () => {
    if (chosenPokemonStats.spd >= opponentPokemonStats.spd) {
      setCD(3);
      setSpAtkCD("spBtnCdActive");
      setSpBtn(true);
      setSpStyle("spBtnStyleCD");

      if (opponentPokemonStats.hp <= 0 || chosenPokemonStats.hp <= 0) {
        return;
      } else {
        setAtkType("special");
        setTimeout(() => {
          setRoundNum(roundNum + 1);
          setRoundContainer("roundContainerActive");
          let atkDifference =
            chosenPokemonStats.spAtk - opponentPokemonStats.spDef;
          let damageMultiplier = 0;
          let randomDecimal = Math.random();
          let baseDmg = Math.floor(randomDecimal * 5) + 10 || 10;

          if (atkDifference <= 0) {
            damageMultiplier = 0.8;
          } else if (atkDifference <= 15) {
            damageMultiplier = 1.5;
          } else if (atkDifference <= 30) {
            damageMultiplier = 2;
          } else if (atkDifference <= 45) {
            damageMultiplier = 2.5;
          } else {
            damageMultiplier = 3;
          }
          const damage = Math.floor(baseDmg * damageMultiplier);
          const updatedHpOpponent = opponentPokemonStats.hp - damage;
          setDmg(damage);
          setOpponentPokemonStats({
            ...opponentPokemonStats,
            hp: updatedHpOpponent,
          });
          if (updatedHpOpponent <= 0) {
            setDefeated("defeatedMessageActive");
            setFightBtn("YOU WON! PLAY AGAIN");
            setMsgBtn(false);
            setOpponentPokemonStats({ hp: 0 });
          } else if (updatedHpOpponent <= 30) {
            setBarColorOpponent("#f13a3a");
          } else if (updatedHpOpponent <= 50) {
            setBarColorOpponent("#efe665");
          }
          setImgOpponent("imgOpponent");
        }, 1500);

        setTimeout(() => {
          setImgOpponent("imgOpponentOff");
        }, 2000);

        setTimeout(() => {
          setRoundNumSecond(roundNumSecond + 1);
          setRoundContainerSecond("roundContainerActiveSecond");
          let atkDifferenceOpponent =
            opponentPokemonStats.spAtk - chosenPokemonStats.spDef;
          let damageMulitplierOpponent = 0;
          let randomDecimalOpponent = Math.random();
          let baseDmgOpponent =
            Math.floor(randomDecimalOpponent * 5) + 10 || 10;

          if (atkDifferenceOpponent <= 0) {
            damageMulitplierOpponent = 0.8;
          } else if (atkDifferenceOpponent <= 15) {
            damageMulitplierOpponent = 1.5;
          } else if (atkDifferenceOpponent <= 30) {
            damageMulitplierOpponent = 2;
          } else if (atkDifferenceOpponent <= 45) {
            damageMulitplierOpponent = 2.5;
          } else {
            damageMulitplierOpponent = 3;
          }

          const opponentDmg = Math.floor(
            baseDmgOpponent * damageMulitplierOpponent
          );
          const updatedHpChosen = chosenPokemonStats.hp - opponentDmg;
          setOpponentDmg(opponentDmg);
          setChosenPokemonStats({ ...chosenPokemonStats, hp: updatedHpChosen });
          if (updatedHpChosen <= 0) {
            setDefeatedSecond("defeatedMessageActive");
            setFightBtn("YOU LOST! PLAY AGAIN!");
            setMsgBtn(false);
            setResult("lost");
            setChosenPokemonStats({ hp: 0 });
          } else if (updatedHpChosen <= 25) {
            setBarColor("#f13a3a");
          } else if (updatedHpChosen <= 50) {
            setBarColor("#efe665");
          }
          setImgChosen("imgChosen");
        }, 3000);
        setTimeout(() => {
          setImgChosen("imgChosenOff");
        }, 3500);

        setFightBtn("KEEP FIGHTING");
      }
    } else {
      setCD(3);
      setSpAtkCD("spBtnCdActive");
      setSpBtn(true);
      setSpStyle("spBtnStyleCD");

      if (opponentPokemonStats.hp <= 0 || chosenPokemonStats.hp <= 0) {
        return;
      } else {
        setAtkType("special");
        setTimeout(() => {
          setRoundNumSecond(roundNumSecond + 1);
          setRoundContainerSecond("roundContainerActiveSecond");
          let atkDifferenceOpponent =
            opponentPokemonStats.spAtk - chosenPokemonStats.spDef;
          let damageMulitplierOpponent = 0;
          let randomDecimalOpponent = Math.random();
          let baseDmgOpponent =
            Math.floor(randomDecimalOpponent * 5) + 10 || 10;

          if (atkDifferenceOpponent <= 0) {
            damageMulitplierOpponent = 0.8;
          } else if (atkDifferenceOpponent <= 15) {
            damageMulitplierOpponent = 1.5;
          } else if (atkDifferenceOpponent <= 30) {
            damageMulitplierOpponent = 2;
          } else if (atkDifferenceOpponent <= 45) {
            damageMulitplierOpponent = 2.5;
          } else {
            damageMulitplierOpponent = 3;
          }

          const opponentDmg = Math.floor(
            baseDmgOpponent * damageMulitplierOpponent
          );
          const updatedHpChosen = chosenPokemonStats.hp - opponentDmg;
          setOpponentDmg(opponentDmg);
          setChosenPokemonStats({ ...chosenPokemonStats, hp: updatedHpChosen });
          if (updatedHpChosen <= 0) {
            setDefeatedSecond("defeatedMessageActive");
            setFightBtn("YOU LOST! PLAY AGAIN!");
            setMsgBtn(false);
            setResult("lost");
            setChosenPokemonStats({ hp: 0 });
          } else if (updatedHpChosen <= 25) {
            setBarColor("#f13a3a");
          } else if (updatedHpChosen <= 50) {
            setBarColor("#efe665");
          }
          setImgChosen("imgChosen");
        }, 1500);

        setTimeout(() => {
          setImgChosen("imgChosenOff");
        }, 2000);

        setTimeout(() => {
          setRoundNum(roundNum + 1);
          setRoundContainer("roundContainerActive");
          let atkDifference =
            chosenPokemonStats.spAtk - opponentPokemonStats.spDef;
          let damageMulitplier = 0;
          let randomDecimal = Math.random();
          let baseDmg = Math.floor(randomDecimal * 5) + 10 || 10;

          if (atkDifference <= 0) {
            damageMulitplier = 0.8;
          } else if (atkDifference <= 15) {
            damageMulitplier = 1.5;
          } else if (atkDifference <= 30) {
            damageMulitplier = 2;
          } else if (atkDifference <= 45) {
            damageMulitplier = 2.5;
          } else {
            damageMulitplier = 3;
          }

          const damage = Math.floor(baseDmg * damageMulitplier);
          const updatedHpOpponent = opponentPokemonStats.hp - damage;
          setDmg(damage);
          setOpponentPokemonStats({
            ...opponentPokemonStats,
            hp: updatedHpOpponent,
          });
          if (updatedHpOpponent <= 0) {
            setDefeated("defeatedMessageActive");
            setFightBtn("YOU WON! PLAY AGAIN");
            setMsgBtn(false);
            setOpponentPokemonStats({ hp: 0 });
          } else if (updatedHpOpponent <= 25) {
            setBarColorOpponent("#f13a3a");
          } else if (updatedHpOpponent <= 50) {
            setBarColorOpponent("#efe665");
          }
          setImgOpponent("imgOpponent");
        }, 3000);
        setTimeout(() => {
          setImgOpponent("imgOpponentOff");
        }, 3500);
      }
      setFightBtn("KEEP FIGHTING");
    }
  };

  const saveLog = () => {
    const newLog = {
      chosenPokemon: chosenPokemonStats.name,
      opponent:
        randomPokemon.name.charAt(0).toUpperCase() +
        randomPokemon.name.slice(1),
      rounds: roundNum,
      status: result,
      player: player,
    };
    axios
      .post("/api/battleLog", newLog)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={nameContainer}>
        <div class="form__group field">
          <input
            onChange={handlePlayer}
            type="input"
            class="form__field"
            placeholder="Enter your name"
            required=""
            textAlign="center"
          />
          <label for="Enter your name" class="form__label">
            Enter name
          </label>
          <div className="attack-buttons">
            <div className="fightBtn">
              <button
                disabled={msgBtn}
                onClick={() => {
                  saveLog();
                  navigate(-1);
                }}
                className={messageBtn}
                style={{ fontWeight: "bolder", color: "white" }}
              >
                {fightBtn}
                <div id="clip">
                  <div id="leftTop" class="corner"></div>
                  <div id="rightBottom" class="corner"></div>
                  <div id="rightTop" class="corner"></div>
                  <div id="leftBottom" class="corner"></div>
                </div>
                <span id="rightArrow" class="arrow"></span>
                <span id="leftArrow" class="arrow"></span>
              </button>
            </div>
          </div>
          {/* <div id="logo-text">
          <img src="..\src\assets\362551-middle-removebg-preview.png"/>
        </div> */}
        </div>
      </div>

      {!pokemon ? (
        <p>Loading...</p>
      ) : (
        pokemon.map((element) => (
          <div key={element.id} className="battlefield">
            <div className={toggleSinglePokemon}>
              <div class="bg-pokedex"></div>
              <div class="bg-pokedex bg2-pokedex"></div>
              <div class="bg-pokedex bg3-pokedex"></div>
              <div className="container-singlePoke">
                <div className="img-name-container">
                <img
                    className="inner-background"
                    src={getTypeImage(element.type[0])}
                  ></img>

                  <img
                    className="inner-image"
                    src={images}
                    alt={element.name.english}
                  />

                  <div className="nameType-container">
                    <h1>{element.name.english}</h1>
                    <p style={{ textAlign: "center" }}>
                      {element.type[0]} {element.type[1]}
                    </p>
                  </div>
                  <div className={buttonsContainer}>
                    <button
                      className="btn-shine buttonSelection"
                      onClick={handleChoise}
                    >
                      Choose him!
                    </button>
                    <button
                      className="btn-shine buttonSelection"
                      onClick={() => navigate(-1)}
                    >
                      Go Back
                    </button>
                  </div>
                </div>
                <div className="statsBar">
                  <section className="bar-graph bar-graph-vertical bar-graph-two">
                    <div className="bar-one bar-container">
                      <div
                        className="bar"
                        style={{ height: `${chosenPokemonStats.hp}%` }}
                        data-percentage={chosenPokemonStats.hp + `%`}
                      ></div>
                      <span className="year">HP</span>
                    </div>
                    <div className="bar-two bar-container">
                      <div
                        className="bar"
                        style={{ height: `${element.base.Attack}%` }}
                        data-percentage={element.base.Attack + `%`}
                      ></div>
                      <span className="year">ATK</span>
                    </div>
                    <div className="bar-three bar-container">
                      <div
                        className="bar"
                        style={{ height: `${element.base.Defense}%` }}
                        data-percentage={element.base.Defense + `%`}
                      ></div>
                      <span className="year">DEF</span>
                    </div>
                    <div className="bar-four bar-container">
                      <div
                        className="bar"
                        style={{ height: `${element.base["Sp. Attack"]}%` }}
                        data-percentage={element.base["Sp. Attack"] + `%`}
                      ></div>
                      <span className="yearS">SP ATK</span>
                    </div>
                    <div className="bar-five bar-container">
                      <div
                        className="bar"
                        style={{ height: `${element.base["Sp. Defense"]}%` }}
                        data-percentage={element.base["Sp. Defense"] + `%`}
                      ></div>
                      <span className="yearS">SP DEF</span>
                    </div>
                    <div className="bar-six bar-container">
                      <div
                        className="bar"
                        style={{ height: `${element.base.Speed / 1.6}%` }}
                        data-percentage={element.base.Speed + `%`}
                      ></div>
                      <span className="year">SPD</span>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <div className={fightContainer}>
              <div className="fighting-page">
                
                <div>
                  <h1>{element.name.english}</h1>
                  <div className="titleTypesContainer">
                  <p className="titleTypes">
                    {element.type[0]}
                    <span style={{marginLeft: 15}}>{element.type[1]}</span>
                  </p>
                  </div>

                  <div class="progress-bar">
                    <span
                      class="progress-bar-fill"
                      style={{
                        width: chosenPokemonStats.hp + "%",
                        backgroundColor: `${barColor}`,
                        textAlign: "right",
                        color: "black", 
                        fontSize: 21, 
                        fontFamily: "Spirit Ginger"
                      }}
                    >
                      {chosenPokemonStats.hp + "/" + element.base.HP}
                    </span>
                  </div>
                  <img
                    className={imgChosen}
                    src={images}
                    alt={element.name.english}
                    style={{ width: 230 }}
                  />
                  <div className="choosenStats">
                    <div className="stat-bars">
                      <span>ATK: </span>
                      <div
                        class="progress-bar-fill"
                        style={{
                          width: element.base.Attack / 2 + "%",
                          backgroundColor: `#659cef`,
                        }}
                      ></div>
                    </div>
                    <div className="stat-bars">
                      <span>DEF: </span>
                      <div
                        class="progress-bar-fill"
                        style={{
                          width: element.base.Defense / 2 + "%",
                          backgroundColor: `#659cef`,
                        }}
                      ></div>
                    </div>
                    <div className="stat-bars">
                      <span>SP Atk: </span>
                      <div
                        class="progress-bar-fill"
                        style={{
                          width: element.base["Sp. Attack"] / 2 + "%",
                          backgroundColor: `#659cef`,
                        }}
                      ></div>
                    </div>
                    <div className="stat-bars">
                      <span>SP Def: </span>
                      <div
                        class="progress-bar-fill"
                        style={{
                          width: element.base["Sp. Defense"] / 2 + "%",
                          backgroundColor: `#659cef`,
                        }}
                      ></div>
                    </div>
                    <div className="stat-bars">
                      <span>Spd: </span>
                      <div
                        class="progress-bar-fill"
                        style={{
                          width: element.base.Speed / 2 + "%",
                          backgroundColor: `#659cef`,
                        }}
                      ></div>
                    </div>
                    <div className="normalSp-attack">
                      <button className={movesBtn} onClick={handleNormalAtk}>
                        Normal Attack
                      </button>
                    </div>
                    <div className="resultsContainer">
                    <div className={roundContainer}>
                      <Card
                        sx={{
                          maxWidth: 345,
                          background: "linear-gradient(to right, #155799, #159957)",
                          color: "white",
                          border: "2px solid white",
                          borderRadius: 5,
                        }}
                      >
                        <CardActionArea>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              sx={{ textAlign: "center",color: "white", fontFamily: "Pokemon Solid" }}
                            >
                              Round {roundNum}
                            </Typography>
                            <Typography variant="body2" sx={{ letterSpacing: "0.3rem", color: "white", fontFamily: "Sans serif",fontWeight: "bolder"}}>
                              {element.name.english} attacks with a {atkType}{" "}
                              attack inflicting <span style={{color: "rgb(158, 3, 3)", fontSize: 21, fontFamily: "Spirit Ginger"}}>{dmg}</span> damage!
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                  </div>
                  </div>
  
                </div>
                {!randomPokemon ? (
                  <p>Loading...</p>
                ) : (
                  <div>
                    <div>
                      <h1>
                        {randomPokemon.name.charAt(0).toUpperCase() +
                          randomPokemon.name.slice(1)}
                      </h1>
                      <p className="titleTypes">  {randomPokemon.types[0].type.name}</p>
                      <div class="progress-bar">
                        <span
                          class="progress-bar-fill"
                          style={{
                            width: opponentPokemonStats.hp + "%",
                            backgroundColor: `${barColorOpponent}`,
                            textAlign: "right",
                            color: "black", 
                            fontSize: 21, 
                            fontFamily: "Spirit Ginger"
                          }}
                        >
                          {opponentPokemonStats.hp +
                            "/" +
                            randomPokemon.stats[0].base_stat}
                        </span>
                      </div>
                      <img
                        className={imgOpponent}
                        src={
                          randomPokemon.sprites.other["official-artwork"]
                            .front_default
                        }
                        alt={randomPokemon.name}
                        style={{ width: 230 }}
                      />
                      <div>
                        <div className="chosen">
                          <div className="stat-bars">
                            <span>ATK: </span>
                            <div
                              class="progress-bar-fill"
                              style={{
                                width:
                                  randomPokemon.stats[1].base_stat / 2 + "%",
                                backgroundColor: `#659cef`,
                              }}
                            ></div>
                          </div>
                          <div className="stat-bars">
                            <span>DEF: </span>
                            <div
                              class="progress-bar-fill"
                              style={{
                                width:
                                  randomPokemon.stats[2].base_stat / 2 + "%",
                                backgroundColor: `#659cef`,
                              }}
                            ></div>
                          </div>
                          <div className="stat-bars">
                            <span>Sp Atk: </span>
                            <div
                              class="progress-bar-fill"
                              style={{
                                width:
                                  randomPokemon.stats[3].base_stat / 2 + "%",
                                backgroundColor: `#659cef`,
                              }}
                            ></div>
                          </div>
                          <div className="stat-bars">
                            <span>SP Def: </span>
                            <div
                              class="progress-bar-fill"
                              style={{
                                width:
                                  randomPokemon.stats[4].base_stat / 2 + "%",
                                backgroundColor: `#659cef`,
                              }}
                            ></div>
                          </div>
                          <div className="stat-bars">
                            <span>Spd: </span>
                            <div
                              class="progress-bar-fill"
                              style={{
                                width:
                                  randomPokemon.stats[5].base_stat / 2 + "%",
                                backgroundColor: `#659cef`,
                              }}
                            ></div>
                          </div>
                          <div className="normalSp-attack">
                            <button
                              className={spStyle}
                              disabled={spBtn}
                              onClick={handleSpAtk}
                              style={{
                                fontFamily: "Pokemon Solid, sans-serif"
                              }}
                            >
                              SP Attack{" "}
                              <span className={spAtkCD}>on CD {cd}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="resultsContainer">
                        <div className={roundContainerSecond}>
                          <Card
                            sx={{
                              maxWidth: 345,
                              background: "linear-gradient(to right, #155799, #159957)",
                              border: "2px solid white",
                              borderRadius: 5,
                            }}
                          >
                            <CardActionArea>
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                  sx={{ textAlign: "center",color: "white", fontFamily: "Pokemon Solid", }}
                                >
                                  Round {roundNumSecond}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ letterSpacing: "0.3rem", color: "white", fontFamily: "Sans serif",fontWeight: "bolder", }}
                                >
                                  {randomPokemon.name.charAt(0).toUpperCase() +
                                    randomPokemon.name.slice(1)}{" "}
                                  attacks with a {atkType} attack inflicting{" "}
                                  <span style={{color: "rgb(158, 3, 3)", fontSize: 21, fontFamily: "Spirit Ginger",width: "60ch"}}>{opponentDmg}</span> damage!
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};
export default PokemonSingle;

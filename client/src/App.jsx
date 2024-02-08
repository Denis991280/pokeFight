import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import PokemonList from "./components/List/PokemonList";
import PokemonSingle from "./components/Single/PokemonSingle";
import PokemonInfo from "./components/Info/PokemonInfo";
import NavBar from "./components/NavBar/navBar";
import Hero from "./components/Hero";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import BattleLog from "./components/BattleLog/BattleLog";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/battleLog" element={<BattleLog />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/" element={<Hero />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonSingle />} />
        <Route path="/pokemon/:id/:info" element={<PokemonInfo />} />
      </Routes>

    </>
  );
}

export default App;

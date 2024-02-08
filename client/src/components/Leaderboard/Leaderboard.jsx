import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Leaderboard.css";


export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    getLeaderboard(`/api/leaderboard`);
  }, []);

  const getLeaderboard = async (url) => {
    try {
      const response = await axios.get(url);
      setLeaderboard(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!leaderboard ? (
        <p>Loading...</p>
      ) : (
        (() => {
          const counts = {};
  
          leaderboard.forEach((element) => {
            const { player, status } = element;
            if (!counts[player]) {
              counts[player] = { wins: 0, losses: 0 };
            }
  
            if (status === "won") {
              counts[player].wins += 1;
            } else if (status === "lost") {
              counts[player].losses += 1;
            }
          });
  
          // Create an array of objects with Pokemon name and win-lose ratio
          const pokemonArray = Object.keys(counts).map((pokemon) => {
            const ratio =
              (counts[pokemon].wins /
                (counts[pokemon].wins + counts[pokemon].losses)) *
              100;
            return { pokemon, ratio };
          });
  
          // Sort the array based on the win-lose ratio
          pokemonArray.sort((a, b) => b.ratio - a.ratio);
  
          return (
            <div className="wrapper" >
              <thead>
                <tr>
                  <th>Pos</th>
                  <th style={{width: 250}}>Player</th>
                  <th style={{width: 100}}>Won</th>
                  <th style={{width: 100}}>Lost</th>
                  <th style={{width: 200}}>Win-Lose Ratio</th>
                </tr>
  
                {pokemonArray.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.pokemon}</td>  
                    <td><span style={{color: "green", fontWeight: "bolder"}}>{counts[item.pokemon].wins}</span></td>
                    <td><span style={{color: "red", fontWeight: "bolder"}}>{counts[item.pokemon].losses}</span></td>
                    <td>{item.ratio.toFixed()}%</td>
                  </tr>
                ))}
              </thead>
            </div>
          );
        })()
      )}
    </>
  );
  
  
}


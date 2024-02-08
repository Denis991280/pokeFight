import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Leaderboard() {
  const [battleLog, setBattleLog] = useState([]);

  useEffect(() => {
    getLeaderboard(`http://localhost:3000/battleLog`);
  }, []);

  const getLeaderboard = async (url) => {
    try {
      const response = await axios.get(url);
      setBattleLog(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!battleLog ? (
        <p>Loading...</p>
      ) : (
        <div className="wrapper">
          <table >
            <thead >
              <tr>
                <th style={{width: 200}}>Player</th>
                <th style={{width: 200}}>Chosen Pokemon</th>
                <th style={{width: 200}}>Opponent</th>
                <th style={{width: 100}}>Rounds</th>
                <th style={{width: 100}}>Won/Lost</th>
              </tr>
            </thead>
            <tbody>
              {battleLog.map((item) => (
                <tr key={item._id}>
                  <td>{item.player}</td>
                  <td>{item.chosenPokemon}</td>
                  <td>{item.opponent}</td>
                  <td>{item.rounds}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

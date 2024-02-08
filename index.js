const express = require("express");
require("dotenv/config")
require("./db.js")
const app = express();
const cors = require('cors')
const path = require("path");
const port = 3000;

const pokemonRouter = require("./routes/pokemon.js");
const leaderboardRouter = require("./routes/leaderboards.js");

app.use(cors())
app.use(express.json())

app.use(express.static(path.resolve(__dirname, "client", "dist")));


app.use("/api/pokemon", pokemonRouter)
app.use("/api/battleLog", leaderboardRouter)
app.use("/api/leaderboard", leaderboardRouter)

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
});

const express = require("express")

const {createLog, getLogs} = require("../controllers/leaderboard")

const leaderboardRouter = express.Router()

leaderboardRouter.route("/").post(createLog).get(getLogs)

module.exports = leaderboardRouter
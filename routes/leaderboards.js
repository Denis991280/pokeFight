const express = require("express")

const {createLog, getLogs} = require("../controllers/leaderboard")

const leaderboardRouter = express.Router()

leaderboardRouter.route("/createNew").post(createLog)
leaderboardRouter.route("/logs").get(getLogs)

module.exports = leaderboardRouter
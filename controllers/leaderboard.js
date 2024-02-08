const Leaderboard = require("../models/leaderboard")

const createLog = async (req, res) => {
    try {
        const {chosenPokemon, opponent, rounds, status, player} = req.body 
        
        const log = await Leaderboard.create({chosenPokemon, opponent, rounds, status, player})
        res.json(log)
    } catch (error) {
        console.log(error)
    }
}

const getLogs = async (req, res) => {
    try {
        const logs = await Leaderboard.find({})
        res.json(logs)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createLog,
    getLogs
}
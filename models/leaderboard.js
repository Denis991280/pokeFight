const {Schema, model} = require("mongoose")

const leaderboadrSchema = new Schema({
    chosenPokemon: {type: String, required: true},
    player: {type: String, required: true},
    opponent: {type: String, required: true},
    rounds: {type: Number, required: true, min: 1},
    status: {type: String, required: true},
    player: {type: String, required: true}
})

const Leaderboard = model("Leaderboard", leaderboadrSchema)

module.exports = Leaderboard
const express = require("express");

const {
    getAll,
    getOne,
    getInfo
} = require ("../controllers/pokemon.js")

const pokemonRouter = express.Router();
pokemonRouter.route("/").get(getAll)
pokemonRouter.route("/:id").get(getOne)
pokemonRouter.route("/:id/:info").get(getInfo)

module.exports = pokemonRouter;
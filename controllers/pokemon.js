const pokemon = require("../pokemon.js");


const getAll = ("/pokemon", (req, res) => {
  res.json(pokemon);
});

const getOne = ("/pokemon/:id", (req, res) => {
  const { id } = req.params;

  const singlePokemon = pokemon.find((element) => {
    if (element.id === +id) {
      //    console.log(element);
      return element;
    }
  });

  if (singlePokemon) {
    res.json(singlePokemon);
  } else {
    res.status(404).json({ message: "Pokemon not found" });
  }
});

const getInfo = ("/pokemon/:id/:info", (req, res) => {
  const { id, info } = req.params;
  const basePokemon = pokemon.find((element) => {
    return element.id === +id;
  });

  if (basePokemon) {
    const selectedInfo = basePokemon[info];
    if (selectedInfo) {
      res.json(selectedInfo);
    } else {
      res.status(404).json({ message: 'Info not found' });
    }
  } else {
    res.status(404).json({ message: 'Pokemon not found' });
  }
});

module.exports = {
    getAll,
    getOne,
    getInfo
}
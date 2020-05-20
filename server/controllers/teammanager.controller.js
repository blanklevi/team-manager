const Player = require("../models/teammanager.model");

module.exports.findAllPlayers = (req, res) => {
  Player.find()
    .then((allPlayers) => res.json({ players: allPlayers }))
    .catch((err) => res.status(400).json(err));
};

module.exports.findOnePlayer = (req, res) => {
  Player.findOne({ _id: req.params.id })
    .then((onePlayer) => res.json({ player: onePlayer }))
    .catch((err) => res.status(400).json(err));
};

module.exports.createPlayer = (req, res) => {
  Player.create(req.body)
    .then((newlyCreatedPlayer) => res.json({ player: newlyCreatedPlayer }))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateExistingPlayer = (req, res) => {
  Player.findOneAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  })
    .then((updatedPlayer) => res.json({ player: updatedPlayer }))
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteAnExistingPlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.status(400).json(err));
};

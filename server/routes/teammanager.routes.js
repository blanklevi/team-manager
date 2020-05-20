const PlayerController = require("../controllers/teammanager.controller");

module.exports = (app) => {
  app.get("/api/players/", PlayerController.findAllPlayers);
  app.get("/api/players/:id", PlayerController.findOnePlayer);
  app.put("/api/players/update/:id", PlayerController.updateExistingPlayer);
  app.post("/api/players/new", PlayerController.createPlayer);
  app.delete(
    "/api/players/delete/:id",
    PlayerController.deleteAnExistingPlayer
  );
};

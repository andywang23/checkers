const { mainModule } = require('process');
const { GameGroup } = require('../db/dbModel');

const dbController = {};

dbController.addGameState = (req, res, next) => {
  const gameState = req.body.gameState;
  const stringifiedGameState = JSON.stringify(gameState);

  GameGroup.create({ gameState: stringifiedGameState }, (err, data) => {
    if (err) return next(err);

    //id of new DB entry will be sent back to user
    res.locals.id = data._id;
    return next();
  });
};

module.exports = dbController;

const { mainModule } = require('process');
const { GameGroup } = require('../db/dbModel');

const dbController = {};

dbController.addGameState = (req, res, next) => {
  const gameState = req.body.gameState;

  GameGroup.create({ gameState }, (err, data) => {
    if (err) return next(err);
    //id of new DB entry will be sent back to user
    res.locals.id = data._id;
    return next();
  });
};

dbController.getGameState = (req, res, next) => {
  const id = req.body.id;

  GameGroup.findById(id, (err, data) => {
    if (err) return next(err);

    res.locals.gameState = data.gameState;
    return next();
  });
};

module.exports = dbController;
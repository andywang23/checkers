const express = require('express');
const dbController = require('../controllers/dbController');
const router = express.Router();

router.get('/:id', dbController.getGameState, (req, res) => res.json(res.locals.gameState));
router.post('/', dbController.addGameState, (req, res) => res.json(res.locals.id));

module.exports = router;

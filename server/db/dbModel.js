const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'checkers',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const gameStateSchema = new Schema({
  gameState: { type: String, required: true },
});

const GameGroup = mongoose.model('game state group', gameStateSchema);

module.exports = {
  GameGroup,
};

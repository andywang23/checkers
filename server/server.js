const express = require('express');
const app = express();
const apiRouter = require('./routes/api.js');
app.use(express.json());
app.use(express.json());

const PORT = process.env.PORT || 8080;

//------------------------- Routing -------------------------
app.use('/api', apiRouter);
app.use(express.urlencoded({ extended: false }));

//------------------------- Generic Route Handler: 404 & Error Handling -------------------------
app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Express Server listening on port ${PORT}`));

module.exports = app;

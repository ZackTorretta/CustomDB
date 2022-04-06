const express = require('express');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');
require('dotenv/config');

const app = express();
app.use(BodyParser.json());
const dateOb = new Date();

app.get('/', (req, res) => {
  const hours = dateOb.getHours();
  const objOne = JSON.stringify(hours);
  const minutes = dateOb.getMinutes();
  const objTwo = JSON.stringify(minutes);
  const time = `${objOne}:${objTwo}`;
  res.send(time);
});
(async () => {
  await Mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  app.listen(8080);
})();

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const strangerThingsDataset = require('./data/dataset/stranger-things-characters.json');
const StrangerThingsRepository = require('./data/repository/StrangerThings');
const StrangerThingsService = require('./services/StrangerThings');
// my strange backend
const app = express();

const strangerThingsRepository = new StrangerThingsRepository(
  strangerThingsDataset,
);
const strangerThingsService = new StrangerThingsService(
  strangerThingsRepository,
);

app.use(cors());

const hereIsTheUpsideDown = process.env.UPSIDEDOWN_MODE === 'true';

app.get('/', (req, res) => {
  const characters = strangerThingsService.search(
    req.query,
    hereIsTheUpsideDown,
  );

  res.status(200).json(characters);
});

app.listen(3000, () => {
  console.log(`Escutando na porta ${process.env.PORT}, ${hereIsTheUpsideDown}`);
});

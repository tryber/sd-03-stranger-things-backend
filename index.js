const express = require('express');
const cors = require('cors');

const { PORT, UPSIDEDOWN_MODE } = process.env;

const strangerThingsDataset = require('./data/dataset/stranger-things-characters.json');
const StrangerThingsRepository = require('./data/repository/StrangerThings');
const StrangerThingsService = require('./services/StrangerThings');

const app = express();

const strangerThingsRepository = new StrangerThingsRepository(
  strangerThingsDataset,
);
const strangerThingsService = new StrangerThingsService(
  strangerThingsRepository,
);

app.use(cors());

const isHereUpsideDown = UPSIDEDOWN_MODE === 'true';
console.log('TYPE OF UPSIDEDOWN', typeof UPSIDEDOWN_MODE)
app.get('/', (req, res) => {
  const characters = strangerThingsService.search(
    req.query,
    isHereUpsideDown,
  );

  res.status(200).json(characters);
});

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});

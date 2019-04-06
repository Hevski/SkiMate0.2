const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');

app.use(cors());

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
  .then((client) => {
    const db = client.db('ski_info_db');
    const skiInfoCollection = db.collection('skiInfo');
    const skiInfoRouter = createRouter(skiInfoCollection);
    app.use('/api/skiInfo', skiInfoRouter);

    const placesBeenCollection = db.collection('placesBeen');
    const placesBeenRouter = createRouter(placesBeenCollection);
    app.use('/api/placesBeen', placesBeenRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});

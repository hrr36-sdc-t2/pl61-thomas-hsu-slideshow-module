const express = require('express');
const app = express();
const cors = require('cors');

const knexConfig = require('../knexfile');
let env = 'development';
const knex = require('knex')(knexConfig[env]);

const dbutils = require('../db/dbutils');

const port = process.env.PORT || 3001;

// Include bundle.js in your index.html at https://s3.us-east-2.amazonaws.com/elasticbeanstalk-us-east-2-281924008100/bundle.js

knex.migrate.latest([knexConfig])
  .then(function() {
    return knex.seed.run();
  })

app.get('/rooms/:listingId/images', cors(), (req, res) => {
  console.log('Heard a GET request');
  dbutils.fetchImages(req.params.listingId)
    .then(images => {
      res.send(JSON.stringify(images))
    })
    .then(() => console.log('...images sent'))
    .catch(err => {
      console.log('Database retrieval failed', err);
    })
})

app.listen(port);
console.log('Listening on port', port);
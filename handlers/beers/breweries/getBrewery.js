'use strict';
require('dotenv').config();
const axios = require('axios');
const {beerEndPoint, beersEndPoint, key} = require('../../endpoint');

module.exports.getBrewery = (event, context, callback) => {

  const beerID = event.path.id;
  const breweryID = event.path.brid;

  axios.get(`${beerEndPoint}/${beerID}/breweries/${breweryID}`, {
        params: {
          key,
          format: 'json'
        }
      })
      .then(response => callback(null, response.data))
      .catch(e => callback(e, null));
};

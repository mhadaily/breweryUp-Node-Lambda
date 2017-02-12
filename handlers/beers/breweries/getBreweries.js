/*
 GET: /beer/:beerId/breweries
 Gets a listing of all breweries that brew the specific beer.
 */

require('dotenv').config();
const axios = require('axios');
const {beerEndPoint, beersEndPoint, key} = require('../../endpoint');

module.exports.getBreweries = (event, context, callback) => {

  const beerID = event.path.id;

  axios.get(`${beerEndPoint}/${beerID}/breweries`, {
        params: {
          key,
          format: 'json'
        }
      })
      .then(response => callback(null, response.data))
      .catch(e => callback(e, null));
};

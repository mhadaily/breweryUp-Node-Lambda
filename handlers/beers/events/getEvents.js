/*
 GET: /beer/:beerId/events
 Gets a listing of all events that brew the specific beer.
 */

require('dotenv').config();
const axios = require('axios');
const {beerEndPoint, beersEndPoint, key} = require('../endpoint');

module.exports.getEvents = (event, context, callback) => {

  const beerID = event.path.id;

  axios.get(`${beerEndPoint}/${beerID}/events`, {
        params: {
          key,
          format: 'json'
        }
      })
      .then(response => callback(null, response.data))
      .catch(e => callback(e, null));
};

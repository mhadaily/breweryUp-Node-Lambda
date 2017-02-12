/*
 GET: /beer/:beerId/yeasts
 Gets a listing of all yeasts in the specific beer.
 */

require('dotenv').config();
const axios = require('axios');
const {beerEndPoint, beersEndPoint, key} = require('../../endpoint');

module.exports.getYeats = (event, context, callback) => {

  const beerID = event.path.id;

  axios.get(`${beerEndPoint}/${beerID}/yeasts`, {
        params: {
          key,
          format: 'json'
        }
      })
      .then(response => callback(null, response.data))
      .catch(e => callback(e, null));
};

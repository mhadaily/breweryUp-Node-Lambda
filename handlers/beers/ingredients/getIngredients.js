/*
 GET: /beer/:beerId/ingredients
 Gets a listing of all ingredients in the specific beer.
 */

require('dotenv').config();
const axios = require('axios');
const {beerEndPoint, beersEndPoint, key} = require('../../endpoint');

module.exports.getIngredients = (event, context, callback) => {

  const beerID = event.path.id;

  axios.get(`${beerEndPoint}/${beerID}/ingredients`, {
        params: {
          key,
          format: 'json'
        }
      })
      .then(response => callback(null, response.data))
      .catch(e => callback(e, null));
};

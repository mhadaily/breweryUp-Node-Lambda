'use strict';
require('dotenv').config();
const axios = require('axios');

module.exports.getBeer = (event, context, callback) => {

  const beerEndPoint = 'http://api.brewerydb.com/v2/beer';
  const key = process.env.API_KEY;
  const beerID = event.path.id;

  axios.get(`${beerEndPoint}/${beerID}`, {
        params: {
          key,
          format: 'json'
        }
      })
      .then(response => callback(null, response.data))
      .catch(e => callback(e, null));
};

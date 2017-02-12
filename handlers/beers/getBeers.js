'use strict';
require('dotenv').config();
const axios = require('axios');

module.exports.getBeers = (event, context, callback) => {

  const beersEndPoint = 'http://api.brewerydb.com/v2/beers';
  const key = process.env.API_KEY;

  axios.get(`${beersEndPoint}`, {
        params: {
          key,
          format: 'json'
        }
      })
      .then(response => callback(null, response.data))
      .catch(e => callback(e, null));
};

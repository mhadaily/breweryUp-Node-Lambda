'use strict';
require('dotenv').config();
const axios = require('axios');
const {beerEndPoint, beersEndPoint, key} = require('../endpoint');

module.exports.getBeers = (event, context, callback) => {

  const p = parseFloat(event.query.page) || 1;

  axios.get(`${beersEndPoint}`, {
        params: {
          key,
          format: 'json',
          p
        }
      })
      .then(response => callback(null, response.data))
      .catch(e => callback(e, null));
};

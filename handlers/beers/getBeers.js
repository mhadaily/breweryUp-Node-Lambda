'use strict';
require('dotenv').config();
const axios = require('axios');
const {beerEndPoint, beersEndPoint, key} = require('../endpoint');

module.exports.getBeers = (event, context, callback) => {

  axios.get(`${beersEndPoint}`, {
        params: {
          key,
          format: 'json'
        }
      })
      .then(response => callback(null, response.data))
      .catch(e => callback(e, null));
};

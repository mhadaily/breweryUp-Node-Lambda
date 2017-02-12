'use strict';
require('dotenv').config();
const axios = require('axios');
const {beerEndPoint, beersEndPoint, key} = require('../endpoint');

module.exports.getBeer = (event, context, callback) => {

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

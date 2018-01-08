const axios = require('axios');
const keys = require('../keys.js');

const KEY = keys.consumerKey;
const SECRET = keys.sharedSecretKey;
const fatAPI = new (require('fatsecret'))(KEY, SECRET);

const url =  'http://platform.fatsecret.com/rest/server.api';
// const encodeUrl = encodeURIComponent(url);

// const a = foo;
// const z= bar;
// const consumerKey = keys.apiKey;
// const signatureMethod = 'HMAC-SHA1';
// const timestamp = Math.floor(Date.now() / 1000);
// const nonce = 'abc';
// const version = '1.0';

// const params = `a=foo&oauth_consumer_key=${consumerKey}&oauth_nonce=${nonce}&oauth_signature_method=${signatureMethod}&oauth_timestamp=${timestamp}&oauth_version=${version}&z=bar`;
// const encodeParams = encodeURIComponent(params);

// const signatureBaseString = `POST&${encodeUrl}&${encodeParams}`;
// const text = signatureBaseString;
// const key = `${keys.consumerKey}&${keys.sharedSecretKey}`;

const foodSearch = (req, res, next) => {
  fatAPI
    .method('foods.search', {
      search_expression: 'Coffiest', 
      max_results: 10
    })
    .then(function(results) {
      console.log(results.foods.food);
      res.send(results.foods.food);
      next();
    })
    .catch(err => console.error(err));
};

module.exports = {
  foodSearch,
};

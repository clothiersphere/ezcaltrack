const keys = require('../keys.js');
/* eslint-disable global-require */
const fatAPI = new (require('fatsecret'))(keys.consumerKey, keys.sharedSecretKey);
/* eslint-disable global-require */

const foodSearch = (req, res, next) => {
  fatAPI
    .method('foods.search', {
      search_expression: 'Coffiest',
      max_results: 10,
    })
    .then((results) => {
      console.log(results.foods.food);
      const data = results.foods.food;
      res.send(data);
      next();
    })
    .catch(err => console.error(err));
};

module.exports = {
  foodSearch,
};

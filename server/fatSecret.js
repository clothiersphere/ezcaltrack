const keys = require('../keys.js');
/* eslint-disable global-require */
const fatAPI = new (require('fatsecret'))(keys.consumerKey, keys.sharedSecretKey);
/* eslint-disable global-require */

function convertFoodsSearchResults(array_) {
  // const array = array_;
  // for (let i = 0; i < array.length; i += 1) {
  //   const splitWords = array[i].food_description.split(' ');
  //   array[i].nutritionalContent = {
  //     grams: splitWords[1].slice(0, splitWords[1].indexOf('g')),
  //     calories: splitWords[4].slice(0, splitWords[4].indexOf('k')),
  //     fat: splitWords[7].slice(0, splitWords[4].indexOf('g')),
  //     carbs: splitWords[10].slice(0, splitWords[4].indexOf('g')),
  //     protein: splitWords[13].slice(0, splitWords[4].indexOf('g')),
  //   };
  // }
  // return array;

  const array = array_.map(entry => (
    {
      text: `${entry.food_name} | ${entry.food_description}`,
      value: `${entry.food_id}`,
    }
  ));

  return array;
}

function convertFoodGetResults(array_) {
  const array = array_;
  const parsedFoodInfo = {
    id: array.food_id,
    name: array.food_name,
    type: array.food_type,
    url: array.food_url,
    servings: array.servings,
  };
  return parsedFoodInfo;
}

const getFoodById = (req, res, next) => {
  const { id } = req.params;
  fatAPI
    .method('food.get', {
      food_id: id,
    })
    .then((results) => {
      const parsedFoodInfo = convertFoodGetResults(results.food);
      res.send(parsedFoodInfo);
      next();
    })
    .catch(err => console.log(err));
};

const getFoodSearch = (req, res, next) => {
  const { keyword } = req.params;
  fatAPI
    .method('foods.search', {
      search_expression: keyword,
      max_results: 10,
    })
    .then((results) => {
      const data = results.foods.food;
      const convertedFoodsSearchResults = convertFoodsSearchResults(data);
      res.send(convertedFoodsSearchResults);
      next();
    })
    .catch(err => console.error(err));
};


module.exports = {
  getFoodById,
  getFoodSearch,
};

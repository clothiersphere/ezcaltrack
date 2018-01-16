const keys = require('../keys.js');
/* eslint-disable global-require */
const fatAPI = new (require('fatsecret'))(keys.consumerKey, keys.sharedSecretKey);
/* eslint-disable global-require */

function convertFoodsSearchResults(array_) {
  const array = array_;
  for (let i = 0; i < array.length; i += 1) {
    const splitWords = array[i].food_description.split(' ');
    array[i].nutritionalContent = {
      grams: splitWords[1].slice(0, splitWords[1].indexOf('g')),
      calories: splitWords[4].slice(0, splitWords[4].indexOf('k')),
      fat: splitWords[7].slice(0, splitWords[4].indexOf('g')),
      carbs: splitWords[10].slice(0, splitWords[4].indexOf('g')),
      protein: splitWords[13].slice(0, splitWords[4].indexOf('g')),
    };
  }
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

const getFoodInfo = (req, res, next) => {
  const id = 7331;

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

const foodSearch = (req, res, next) => {
  const { keyword } = req.params;

  fatAPI
    .method('foods.search', {
      search_expression: keyword,
      max_results: 10,
    })
    .then((results) => {
      console.log(results, "results")
      console.log(results.foods.food);
      const data = results.foods.food;
      res.send(data);
      next();
    })
    .catch(err => console.error(err));
  // const data = [{"food_description":"Per 100g - Calories: 1kcal | Fat: 0.02g | Carbs: 0.04g | Protein: 0.12g","food_id":"7331","food_name":"Coffee","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee"},{"food_description":"Per 100g - Calories: 1kcal | Fat: 0.02g | Carbs: 0.00g | Protein: 0.12g","food_id":"37818","food_name":"Coffee (Brewed From Grounds)","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/usda/coffee-(brewed-from-grounds)"},{"food_description":"Per 168g - Calories: 25kcal | Fat: 1.40g | Carbs: 2.77g | Protein: 0.37g","food_id":"2479591","food_name":"Coffee with Cream","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee-with-cream"},{"food_description":"Per 175g - Calories: 49kcal | Fat: 1.40g | Carbs: 9.02g | Protein: 0.37g","food_id":"2479597","food_name":"Coffee with Cream and Sugar","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee-with-cream-and-sugar"},{"food_description":"Per 168g - Calories: 6kcal | Fat: 0.14g | Carbs: 0.80g | Protein: 0.31g","food_id":"2479602","food_name":"Coffee with Milk","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee-with-milk"},{"food_description":"Per 175g - Calories: 30kcal | Fat: 0.14g | Carbs: 7.05g | Protein: 0.31g","food_id":"2479604","food_name":"Coffee with Milk and Sugar","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee-with-milk-and-sugar"},{"food_description":"Per 171g - Calories: 28kcal | Fat: 0.01g | Carbs: 6.87g | Protein: 0.18g","food_id":"2479605","food_name":"Coffee with Sugar","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee-with-sugar"},{"food_description":"Per 100g - Calories: 1kcal | Fat: 0.02g | Carbs: 0.04g | Protein: 0.12g","food_id":"7467","food_name":"Regular Coffee","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee-regular"},{"brand_name":"Green Mountain Coffee","food_description":"Per 1 k-cup - Calories: 2kcal | Fat: 0.00g | Carbs: 0.00g | Protein: 0.00g","food_id":"1013710","food_name":"Breakfast Blend K-Cup","food_type":"Brand","food_url":"http://www.fatsecret.com/calories-nutrition/green-mountain-coffee/breakfast-blend-k-cup"},{"brand_name":"Dunkin' Donuts","food_description":"Per 1 serving - Calories: 120kcal | Fat: 6.00g | Carbs: 19.00g | Protein: 1.00g","food_id":"28351","food_name":"Coffee with Cream & Sugar","food_type":"Brand","food_url":"http://www.fatsecret.com/calories-nutrition/dunkin-donuts/coffee-with-cream-and-sugar"},{"brand_name":"Dunkin' Donuts","food_description":"Per 1 serving - Calories: 60kcal | Fat: 6.00g | Carbs: 2.00g | Protein: 1.00g","food_id":"66646","food_name":"Coffee with Cream","food_type":"Brand","food_url":"http://www.fatsecret.com/calories-nutrition/dunkin-donuts/coffee-with-cream"},{"food_description":"Per 332g - Calories: 110kcal | Fat: 4.48g | Carbs: 10.06g | Protein: 7.17g","food_id":"7337","food_name":"Latte Coffee","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee-latte"},{"food_description":"Per 164g - Calories: 3kcal | Fat: 0.00g | Carbs: 0.63g | Protein: 0.18g","food_id":"7339","food_name":"Instant Coffee (made from Powdered)","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee-made-from-powdered-instant-regular"},{"food_description":"Per 168g - Calories: 5kcal | Fat: 0.02g | Carbs: 0.81g | Protein: 0.32g","food_id":"5238847","food_name":"Coffee with Skim Milk","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee-with-skim-milk"},{"food_description":"Per 100g - Calories: 1kcal | Fat: 0.00g | Carbs: 0.10g | Protein: 0.10g","food_id":"7442","food_name":"Decaffeinated Coffee","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee-decaffeinated"},{"food_description":"Per 191g - Calories: 32kcal | Fat: 1.70g | Carbs: 9.15g | Protein: 1.14g","food_id":"7446","food_name":"Instant Coffee with Whitener and Low Calorie Sweetener (Powdered Mix)","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee-made-from-powdered-instant-mix-with-whitener-and-low-calorie-sweetener"},{"brand_name":"Dunkin' Donuts","food_description":"Per 1 serving - Calories: 80kcal | Fat: 1.00g | Carbs: 16.00g | Protein: 2.00g","food_id":"66506","food_name":"Coffee with Milk & Sugar","food_type":"Brand","food_url":"http://www.fatsecret.com/calories-nutrition/dunkin-donuts/coffee-with-milk-and-sugar"},{"food_description":"Per 100g - Calories: 2kcal | Fat: 0.18g | Carbs: 0.00g | Protein: 0.12g","food_id":"7554","food_name":"Espresso Coffee","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/coffee-espresso"},{"food_description":"Per 181g - Calories: 56kcal | Fat: 3.00g | Carbs: 4.37g | Protein: 3.07g","food_id":"7350","food_name":"Cappuccino","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/generic/cappuccino"},{"brand_name":"General Foods","food_description":"Per 1 1/3 tbsp - Calories: 60kcal | Fat: 2.50g | Carbs: 10.00g | Protein: 0.00g","food_id":"65443","food_name":"French Vanilla Cafe","food_type":"Brand","food_url":"http://www.fatsecret.com/calories-nutrition/general-foods/french-vanilla-cafe"},{"brand_name":"7-Eleven","food_description":"Per 12 fl oz - Calories: 10kcal | Fat: 0.00g | Carbs: 2.00g | Protein: 0.00g","food_id":"297847","food_name":"Coffee","food_type":"Brand","food_url":"http://www.fatsecret.com/calories-nutrition/7-eleven/coffee"},{"brand_name":"Dunkin' Donuts","food_description":"Per 1 serving - Calories: 13kcal | Fat: 0.00g | Carbs: 4.00g | Protein: 2.00g","food_id":"66648","food_name":"Coffee with Skim Milk","food_type":"Brand","food_url":"http://www.fatsecret.com/calories-nutrition/dunkin-donuts/coffee-with-skim-milk"},{"brand_name":"General Foods","food_description":"Per 1 1/3 tbsp - Calories: 30kcal | Fat: 2.50g | Carbs: 2.00g | Protein: 0.00g","food_id":"59390","food_name":"Sugar Free French Vanilla Cafe","food_type":"Brand","food_url":"http://www.fatsecret.com/calories-nutrition/general-foods/sugar-free-french-vanilla-cafe"},{"brand_name":"Green Mountain Coffee","food_description":"Per 1 k-cup - Calories: 2kcal | Fat: 0.00g | Carbs: 0.00g | Protein: 0.00g","food_id":"2118938","food_name":"Donut House Coffee K-Cup","food_type":"Brand","food_url":"http://www.fatsecret.com/calories-nutrition/green-mountain-coffee/donut-house-coffee-k-cup"},{"food_description":"Per 100g - Calories: 0kcal | Fat: 0.00g | Carbs: 0.00g | Protein: 0.10g","food_id":"37813","food_name":"Coffee (Brewed From Grounds, Decaffeinated)","food_type":"Generic","food_url":"http://www.fatsecret.com/calories-nutrition/usda/coffee-(brewed-from-grounds-decaffeinated)"}];
  // const convertedFoodsSearchResults = convertFoodsSearchResults(data);
  // res.send(convertedFoodsSearchResults);
  // next();
};


module.exports = {
  getFoodInfo,
  foodSearch,
};

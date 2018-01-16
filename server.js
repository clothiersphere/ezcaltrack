const express = require('express');
const fatSecret = require('./server/fatSecret');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/foodSearch', fatSecret.foodSearch);
app.get('/api/getFoodInfo', fatSecret.getFoodInfo);
app.get('/api/food/getInfo/:id', fatSecret.getFoodInfo);
app.get('/api/food/search/:keyword', fatSecret.foodSearch);

  // api/food/
    // search/:term
    // getInfo/:id

app.listen(1234, () => {
  console.log('%s listening at %d', app.name, 1234);
});

module.exports = 'api';

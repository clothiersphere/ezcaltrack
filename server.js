const express = require('express');
const fatSecret = require('./server/fatSecret');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/food/:id', fatSecret.getFoodById);
app.get('/api/food/search/:keyword', fatSecret.getFoodSearch);

app.listen(1234, () => {
  console.log('%s listening at %d', app.name, 1234);
});

module.exports = 'api';

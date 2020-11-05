const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('in middleware');
  next(); // use next() to move to next middleware below
});
app.use((req, res, next) => {
  console.log('another middleware');
  res.send('<h2>hello from express</h2>');
});

app.listen(3000);

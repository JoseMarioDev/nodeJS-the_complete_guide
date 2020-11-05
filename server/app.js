const express = require('express'); // installs express
const app = express(); //sets app to use express. sometimes called server?
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); //parse body

app.use('/', (req, res, next) => {
  console.log('this always runs');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('middleware');
  res.send('<h2>add product page</h2>');
});
app.use('/', (req, res, next) => {
  console.log('another middleware');
  res.send('<h2>hello from express</h2>');
});

// listen on port 3000.  can refactor to use .env like in class eventually
app.listen(3000);

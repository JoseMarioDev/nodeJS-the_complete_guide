const express = require('express'); // installs express
const app = express(); //sets app to use express. sometimes called server?

//ex of middleware
app.use((req, res, next) => {
  console.log('in middleware');
  next(); // use next() to move to next middleware below
});
app.use((req, res, next) => {
  console.log('another middleware');
  res.send('<h2>hello from express</h2>');
});

// listen on port 3000.  can refactor to use .env like in class eventually
app.listen(3000);

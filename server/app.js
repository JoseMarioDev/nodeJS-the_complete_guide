const express = require('express'); // installs express
const app = express(); //sets app to use express. sometimes called server?
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false })); //parse body

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 middleware to catch all
app.use((req, res, next) => {
  res.status(404).send('<h2>Page not found</h2>');
});

// listen on port 3000.  can refactor to use .env like in class eventually
app.listen(3000);

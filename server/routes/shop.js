const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
res.send('<h2>hello from express</h2>')
});

module.exports = router

let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json({ message: 'User Index Routes'});
});

module.exports = router;
